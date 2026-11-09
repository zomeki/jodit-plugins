export default class {
  init(jodit) {
    this.jodit = jodit;
    this.tablePopups = new Map();
    this.onPopupOpen = this.onPopupOpen.bind(this);
    this.onPopupClose = this.onPopupClose.bind(this);
    jodit.events.on('afterOpenPopup', this.onPopupOpen);
    jodit.events.on('beforePopupClose', this.onPopupClose);
  }

  destruct() {
    if (!this.jodit) return;

    this.jodit.events.off('afterOpenPopup', this.onPopupOpen);
    this.jodit.events.off('beforePopupClose', this.onPopupClose);
    this.tablePopups.clear();
  }

  onPopupOpen(popup) {
    if (!this.isTablePopup(popup)) return;

    this.tablePopups.set(
      popup.container,
      new Set(this.jodit.editor.querySelectorAll('table'))
    );
  }

  onPopupClose(popup) {
    if (!this.isTablePopup(popup)) return;

    const existingTables = this.tablePopups.get(popup.container);
    if (!existingTables) return;

    this.tablePopups.delete(popup.container);
    this.jodit.editor.querySelectorAll('table').forEach(table => {
      if (!existingTables.has(table)) this.removeTableWidths(table);
    });
  }

  isTablePopup(popup) {
    return !!popup.container.querySelector('.jodit-form__table-creator-box');
  }

  removeTableWidths(table) {
    this.removeWidth(table);
    table.style.removeProperty('border-collapse');
    table.querySelectorAll('td').forEach(cell => this.removeWidth(cell));
  }

  removeWidth(element) {
    element.removeAttribute('width');
    element.style.removeProperty('width');
  }
}
