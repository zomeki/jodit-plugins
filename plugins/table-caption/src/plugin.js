import Jodit from './jodit.js';
import addCaptionIcon from './images/add-caption.svg';
import removeCaptionIcon from './images/remove-caption.svg';

export default class {
  init(jodit) {
    this.jodit = jodit;

    jodit.options.popup.cells = [
      {
        name: 'addTableCaption',
        icon: addCaptionIcon,
        text: jodit.i18n('tableCaptionAdd'),
        tooltip: jodit.i18n('tableCaptionAdd'),
        exec: (editor, target) => {
          this.addCaption(target);
        }
      },
      {
        name: 'removeTableCaption',
        icon: removeCaptionIcon,
        text: jodit.i18n('tableCaptionRemove'),
        tooltip: jodit.i18n('tableCaptionRemove'),
        exec: (editor, target) => {
          this.removeCaption(target);
        }
      },
      '\n',
      ...jodit.options.popup.cells
    ];
  }

  getTable(target) {
    let tableElement = target && target.nodeName.toLowerCase() === 'table'
      ? target
      : target && target.closest('table');
    if (!tableElement) {
      const table = this.jodit.getInstance('Table', this.jodit.options);
      const selectedCell = table && table.getAllSelectedCells()[0];
      tableElement = selectedCell && selectedCell.closest('table');
    }

    return tableElement;
  }

  addCaption(target) {
    const tableElement = this.getTable(target);
    if (!tableElement) return;

    const caption = tableElement.querySelector(':scope > caption') ||
      this.jodit.createInside.element('caption');

    if (!caption.parentNode) {
      tableElement.insertBefore(caption, tableElement.firstChild);
    }

    this.jodit.s.setCursorIn(caption);
  }

  removeCaption(target) {
    const tableElement = this.getTable(target);
    const caption = tableElement && tableElement.querySelector(':scope > caption');
    if (!caption) return;

    caption.remove();

    const firstCell = tableElement.rows[0] && tableElement.rows[0].cells[0];
    if (firstCell) {
      this.jodit.s.setCursorIn(firstCell);
    }
  }
}
