import { Jodit } from 'jodit';

export default class {
  init(jodit) {
    this.jodit = jodit;
    this.onFocusFunc = this.onFocus.bind(this);
    jodit.events.on('focus', this.onFocusFunc);
  }

  destruct() {
    this.jodit.events.off('focus', this.onFocusFunc);
    if (Jodit.currentInstance === this.jodit) {
      Jodit.currentInstance = null;
    }
  }

  onFocus(event) {
    Jodit.currentInstance = this.jodit;
  }
}
