export default class {
  init(jodit) {
    this.jodit = jodit;
    this.sanitizeFunc = this.sanitize.bind(this);
    this.sanitizePasteFunc = this.sanitizePaste.bind(this);

    jodit.events.on('change', this.sanitizeFunc);
    jodit.events.on('processPaste', this.sanitizePasteFunc);
  }

  destruct() {
    this.jodit.events.off('change', this.sanitizeFunc);
    this.jodit.events.off('processPaste', this.sanitizePasteFunc);
  }

  sanitize() {
    const changed = this.removeUnsafeAttributes(this.jodit.editor);
    if (changed) this.jodit.synchronizeValues();
  }

  sanitizePaste(event, html, type) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const changed = this.removeUnsafeAttributes(wrapper);
    if (changed) return wrapper.innerHTML;
    return html;
  }

  removeUnsafeAttributes(rootElem) {
    let changed = false;
    rootElem.querySelectorAll('*').forEach(elem => {
      [...elem.attributes].forEach(attr => {
        if (attr.name.match(/^(href|src|action)$/i) && attr.value.match(/^javascript:/i)) {
          elem.removeAttribute(attr.name);
          changed = true;
        }
        if (attr.name.match(/^on/i)) {
          elem.removeAttribute(attr.name);
          changed = true;
        }
      });
    });
    return changed;
  }
}
