import Jodit from './jodit.js';

const globalDocument = Jodit.constants.globalDocument;
const Dom = Jodit.modules.Dom;
const { toArray, trim } = Jodit.modules.Helpers;

export const defaultAllowedStyles = [
  'color', 'background', 'background-color', 'margin', 'margin-left', 'margin-right',
  'text-indent', 'text-decoration', 'text-align', 'text-justify',
  'border', 'border-width', 'border-style', 'border-color',
  'border-top', 'border-top-width', 'border-top-style', 'border-top-color',
  'border-right', 'border-right-width', 'border-right-style', 'border-right-color',
  'border-bottom', 'border-bottom-width', 'border-bottom-style', 'border-bottom-color',
  'border-left', 'border-left-width', 'border-left-style', 'border-left-color',
  'border-collapse'
];

// patch for https://github.com/xdan/jodit/blob/4.13.16/src/core/helpers/html/clean-from-word.ts
// patch start
export default function(html, allowedStyles = defaultAllowedStyles) {
// patch end
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
                preserveBasicStyles(node, allowedStyles);
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
  const listItems = new Map();
  root.querySelectorAll('p[style], div[style]').forEach(node => {
    const match = /mso-list:\s*l(\d+)\s+level\s*(\d+)(?:\s+lfo(\d+))?/i.exec(node.getAttribute('style') || '');
    if (match && Number(match[2])) {
      listItems.set(node, { id: match[1], level: match[2], instance: match[3] || '' });
    }
  });
  const listFormats = wordListFormats(root, listItems);

  const parents = [...new Set([...listItems.keys()].map(node => node.parentNode))];
  parents.forEach(parent => {
    convertWordListChildren(parent, listItems, listFormats);
  });
}

function wordListFormats(root, listItems) {
  const formats = new Map();
  listItems.forEach((listItem, node) => {
    const format = wordListFormatFromStyle(root, listItem) || wordListFormatFromText(node);
    formats.set(node, format);
  });
  return formats;
}

function wordListFormatFromStyle(root, listItem) {
  const styles = Array.from(root.querySelectorAll('style')).map(node => node.textContent).join('\n');
  const rule = new RegExp(`@list\\s+l${listItem.id}\\s*:\\s*level${listItem.level}\\s*\\{([^}]*)\\}`, 'i');
  const match = rule.exec(styles);
  const format = match && /mso-level-number-format\s*:\s*([^;}\s]+)/i.exec(match[1]);
  return format ? format[1].toLowerCase() : null;
}

function wordListFormatFromText(node) {
  const marker = Array.from(node.querySelectorAll('[style]'))
    .find(element => /mso-list:\s*ignore/i.test(element.getAttribute('style') || ''));
  const text = marker && marker.textContent.trim();

  return text && /^(?:\d+|[a-z]|[ivxlcdm]+)[.)]$/i.test(text) ? 'decimal' : 'bullet';
}

function convertWordListChildren(parent, listItems, listFormats) {
  const candidates = new Map(
    Array.from(listItems).filter(([node]) => node.parentNode === parent)
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

    const listItem = candidates.get(node);
    const format = listFormats.get(node);
    const listTag = format === 'bullet' || format === 'none' ? 'ul' : 'ol';
    const level = resolveWordListLevel(node, levels, listTag, listItem);
    const item = createWordListItem(node);
    level.list.appendChild(item);
    level.item = item;
    parent.removeChild(node);
  });
}

function resolveWordListLevel(node, levels, listTag, listItem) {
  const depth = Number(listItem.level);
  const listId = `${listItem.id}:${listItem.instance}`;
  if (!levels.length) {
    const list = globalDocument.createElement(listTag);
    node.parentNode.insertBefore(list, node);
    levels.push({ list, item: null, tag: listTag, listId });
  }

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
    levels.push({ list: nestedList, item: null, tag: listTag, listId });
  }

  let level = levels[levels.length - 1];
  if (level.tag !== listTag || level.listId !== listId) {
    const replacement = globalDocument.createElement(listTag);
    level.list.parentNode.insertBefore(replacement, level.list.nextSibling);
    level = { list: replacement, item: null, tag: listTag, listId };
    levels[levels.length - 1] = level;
  }

  return level;
}

function createWordListItem(node) {
  const item = globalDocument.createElement('li');
  if (node.hasAttribute('style')) {
    item.setAttribute('style', node.getAttribute('style'));
    ['margin', 'margin-left', 'margin-right', 'text-indent'].forEach(property => {
      item.style.removeProperty(property);
    });
  }
  Array.from(node.childNodes).forEach(child => {
    item.appendChild(child);
  });
  return item;
}

function preserveBasicStyles(node, allowedStyles) {
  const styles = [];

  Array.from(node.style).filter(property => allowedStyles.includes(property)).forEach(property => {
    const value = node.style.getPropertyValue(property);
    const priority = node.style.getPropertyPriority(property);
    if (value) {
      styles.push(`${property}: ${value}${priority ? ' !important' : ''}`);
    }
  });

  if (styles.length) {
    node.setAttribute('style', `${styles.join('; ')};`);
  } else {
    node.removeAttribute('style');
  }
}
