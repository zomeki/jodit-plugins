import Jodit from './jodit.js';
import { readWordListItems, wrapWordListItems } from 'jodit/esm/core/helpers/html/word-lists.js';

const globalDocument = Jodit.constants.globalDocument;
const Dom = Jodit.modules.Dom;
const { attrRaw, toArray, trim } = Jodit.modules.Helpers;

// patch for https://github.com/xdan/jodit/blob/4.19.10/src/core/helpers/html/clean-from-word.ts
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

    const marks = [];
    const listItems = readWordListItems(div);

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
                // Word marks its auto-generated list markers with mso-list:Ignore.
                if (/mso-list:\s*ignore/i.test(node.getAttribute('style') || '')) {
                  marks.push(node);
                  break;
                }

                toArray((node).attributes).forEach(
                  (attribute) => {
                    if (
                      [
                        'src',
                        'href',
                        'rel',
                        'content',
                        // patch start
                        'colspan',
                        'rowspan'
                        // patch end
                      ].indexOf(
                        attribute.name.toLowerCase()
                      ) === -1
                    ) {
                      // `attrRaw`: SVG keeps camelCase names
                      // (`viewBox`), `attr()` would kebab-case
                      // them and silently skip the removal
                      attrRaw(
                        node,
                        attribute.name,
                        null
                      );
                    }
                  }
                );
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
    wrapWordListItems(listItems);

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
