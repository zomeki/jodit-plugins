import Jodit from './jodit.js';

const globalDocument = Jodit.constants.globalDocument;
const Dom = Jodit.modules.Dom;
const { toArray, trim } = Jodit.modules.Helpers;

// patch for https://github.com/xdan/jodit/blob/4.13.16/src/core/helpers/html/clean-from-word.ts
export default function(html) {
  if (html.indexOf('<html ') !== -1) {
    html = html.substring(html.indexOf('<html '), html.length);
    html = html.substring(
      0,
      html.lastIndexOf('</html>') + '</html>'.length
    );
  }

  let convertedString = '';

  try {
    const div = globalDocument.createElement('div');
    div.innerHTML = html;

    // patch start
    convertWordLists(div);
    // patch end

    const marks = [];

    if (div.firstChild) {
      Dom.each(div, node => {
        if (!node) {
          return;
        }
        switch (node.nodeType) {
          case Node.ELEMENT_NODE:
            switch (node.nodeName) {
              case 'STYLE':
              case 'LINK':
              case 'META':
                marks.push(node);
                break;

              case 'W:SDT':
              case 'W:SDTPR':
              case 'FONT':
                Dom.unwrap(node);
                break;

              default:
								// Word marks its auto-generated list markers
								// (the literal bullet/number, e.g. `1.` or `·`)
								// with `mso-list:Ignore`. They are display-only
								// and must not be imported, otherwise the marker
								// text leaks into the content. See #948
								if (
									/mso-list:\s*ignore/i.test(
										node.getAttribute(
											'style'
										) || ''
									)
								) {
									marks.push(node);
									break;
								}

                toArray(node.attributes).forEach(
                  (attr) => {
                    if (
                      [
                        'src',
                        'href',
                        'rel',
                        'content',
                        // patch start
                        'colspan',
                        'rowspan',
                        'style'
                        // patch end
                      ].indexOf(
                        attr.name.toLowerCase()
                      ) === -1
                    ) {
                      node.removeAttribute(
                        attr.name
                      );
                    }
                  }
                );
                // patch start
                preserveBasicStyles(node);
                // patch end
            }
            break;
          case Node.TEXT_NODE:
            break;
          default:
            marks.push(node);
        }
      });
    }

    Dom.safeRemove.apply(null, marks);

    convertedString = div.innerHTML;
  } catch (e) {}

  if (convertedString) {
    html = convertedString;
  }

  html = html.split(/(\n)/).filter(trim).join('\n');

  return html
    .replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, '')
    .replace(/<!--[^>]*>/g, '');
}


function convertWordLists(root) {
  const listItems = Array.from(root.querySelectorAll('p[style], div[style]'))
    .filter(node => wordListLevel(node));
  const parents = new Set(listItems.map(node => node.parentNode));
  const listFormats = wordListFormats(root);

  parents.forEach(parent => {
    convertWordListChildren(parent, listItems, listFormats);
  });
}

function convertWordListChildren(parent, listItems, listFormats) {
  const candidates = new Set(
    listItems.filter(node => node.parentNode === parent)
  );
  const children = Array.from(parent.childNodes);
  let levels = [];

  children.forEach(node => {
    if (!candidates.has(node)) {
      if (levels.length && node.nodeType === Node.TEXT_NODE && !trim(node.nodeValue)) {
        parent.removeChild(node);
        return;
      }

      levels = [];
      return;
    }

    const format = wordListFormat(node, listFormats);
    const listTag = format === 'bullet' || format === 'none' ? 'ul' : 'ol';
    const level = resolveWordListLevel(node, levels, listTag);
    const item = createWordListItem(node);
    level.list.appendChild(item);
    level.item = item;
    parent.removeChild(node);
  });
}

function resolveWordListLevel(node, levels, listTag) {
  if (!levels.length) {
    const list = globalDocument.createElement(listTag);
    node.parentNode.insertBefore(list, node);
    levels.push({ list, item: null, tag: listTag });
  }

  const depth = Math.max(1, wordListLevel(node));
  while (levels.length > depth) {
    levels.pop();
  }
  while (levels.length < depth) {
    const previous = levels[levels.length - 1];
    if (!previous.item) {
      break;
    }
    const nestedList = globalDocument.createElement(listTag);
    previous.item.appendChild(nestedList);
    levels.push({ list: nestedList, item: null, tag: listTag });
  }

  let level = levels[levels.length - 1];
  if (level.tag !== listTag) {
    const replacement = globalDocument.createElement(listTag);
    level.list.parentNode.insertBefore(replacement, level.list.nextSibling);
    level = { list: replacement, item: null, tag: listTag };
    levels[levels.length - 1] = level;
  }

  return level;
}

function createWordListItem(node) {
  const item = globalDocument.createElement('li');
  if (node.hasAttribute('style')) {
    item.setAttribute('style', node.getAttribute('style'));
    item.style.removeProperty('margin');
    ['margin-left', 'margin-right', 'text-indent'].forEach(property => {
      item.style.removeProperty(property);
    });
  }
  while (node.firstChild) {
    item.appendChild(node.firstChild);
  }
  return item;
}

function wordListFormats(root) {
  const formats = new Map();
  const styles = Array.from(root.querySelectorAll('style')).map(node => node.textContent).join('\n');
  const rules = /@list\s+l(\d+)\s*:\s*level(\d+)\s*\{([^}]*)\}/gi;
  let match;

  while ((match = rules.exec(styles))) {
    const format = /mso-level-number-format\s*:\s*([^;}\s]+)/i.exec(match[3]);
    if (format) {
      formats.set(`${match[1]}:${match[2]}`, format[1].toLowerCase());
    }
  }

  return formats;
}

function wordListFormat(node, formats) {
  const style = node.getAttribute('style') || '';
  const match = /mso-list:\s*l(\d+)\s+level\s*(\d+)/i.exec(style);

  const format = match && formats.get(`${match[1]}:${match[2]}`);
  if (format) return format;

  const marker = node.querySelector('[style*="mso-list:Ignore"]');
  const text = marker && marker.textContent.trim();

  return text && /^(?:\d+|[a-z]|[ivxlcdm]+)[.)]$/i.test(text) ? 'decimal' : 'bullet';
}

function wordListLevel(node) {
  const style = node.getAttribute('style') || '';
  const match = /mso-list:\s*l\d+\s+level\s*(\d+)/i.exec(style);
  return match ? Number(match[1]) : 0;
}

function preserveBasicStyles(node) {
  const color = node.style.getPropertyValue('color');
  const backgroundColor = node.style.getPropertyValue('background-color');
  const styles = [];

  if (color) {
    styles.push(`color: ${color}`);
  }
  if (backgroundColor) {
    styles.push(`background-color: ${backgroundColor}`);
  }

  ['margin-left', 'margin-right', 'text-indent'].forEach(property => {
    const value = node.style.getPropertyValue(property);
    if (value) {
      styles.push(`${property}: ${value}`);
    }
  });

  if (styles.length) {
    node.setAttribute('style', `${styles.join('; ')};`);
  } else {
    node.removeAttribute('style');
  }
}
