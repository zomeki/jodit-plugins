import Jodit from './jodit.js';

const globalDocument = Jodit.constants.globalDocument;
const Dom = Jodit.modules.Dom;
const { toArray, trim } = Jodit.modules.Helpers;

// patch for https://github.com/xdan/jodit/blob/4.7.9/src/core/helpers/html/clean-from-word.ts
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
                        'rowspan'
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
