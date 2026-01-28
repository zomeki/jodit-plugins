export default class {
  init(jodit) {
    this.jodit = jodit;

    this.onBlurFunc = this.onBlur.bind(this);
    jodit.events.on('blur', this.onBlurFunc);
  }

  destruct() {
    this.jodit.events.off('blur', this.onBlurFunc);
  }

  onBlur(event) {
    if (this.jodit.value === '<p><br></p>') {
      this.jodit.value = '';
    }
  }
}
