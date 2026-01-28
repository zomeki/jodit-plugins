import { Jodit } from 'jodit';

export default class {
  init(jodit) {
    this.jodit = jodit;

    jodit.options.popup.cells = Jodit.atom([
      {
        name: 'cellToTH',
        text: 'TH',
        tooltip: jodit.i18n('tableCellTypeToTH'),
        exec: () => {
          this.convertTo('th');
        }
      },
      {
        name: 'cellToTD',
        text: 'TD',
        tooltip: jodit.i18n('tableCellTypeToTD'),
        exec: () => {
          this.convertTo('td');
        }
      },
      '\n',
      ...jodit.options.popup.cells
    ]);
  }

  convertTo(tag) {
    const table = this.jodit.getInstance('Table', this.jodit.options);
    if (!table) return;

    table.getAllSelectedCells().forEach(cell => {
      table.removeSelection(cell);
      if (cell.tagName.toLowerCase() !== tag) {
        const newCell = this.createNewCell(cell, tag);
        cell.parentNode.replaceChild(newCell, cell);
      }
    });
  }

  createNewCell(cell, tag) {
    const newCell = this.jodit.createInside.element(tag);
    newCell.innerHTML = cell.innerHTML;

    [...cell.attributes].forEach(attr => {
      newCell.setAttribute(attr.name, attr.value);
    });

    return newCell;
  }
}
