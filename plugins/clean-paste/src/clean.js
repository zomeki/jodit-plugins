import Jodit from './jodit.js';

const globalDocument = Jodit.constants.globalDocument;
const { cleanFromWord, toArray } = Jodit.modules.Helpers;

export default function(html) {
  const original = globalDocument.createElement('div');
  original.innerHTML = html;

  const spans = toArray(original.querySelectorAll('td, th')).map(cell => ({
    colspan: cell.getAttribute('colspan'),
    rowspan: cell.getAttribute('rowspan')
  }));

  const cleaned = globalDocument.createElement('div');
  cleaned.innerHTML = cleanFromWord(html);

  toArray(cleaned.querySelectorAll('td, th')).forEach((cell, index) => {
    const attributes = spans[index];
    if (!attributes) return;

    ['colspan', 'rowspan'].forEach(name => {
      if (attributes[name] !== null) {
        cell.setAttribute(name, attributes[name]);
      }
    });
  });

  return cleaned.innerHTML;
}
