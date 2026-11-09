import clean from './clean';
import './paste-from-word-patch';

export default class {
  init(jodit) {
    this.jodit = jodit;
    this.onCustomPasteHTMLOptionFunc = this.onCustomPasteHTMLOption.bind(this);

    this.jodit.events.on('onCustomPasteHTMLOption', this.onCustomPasteHTMLOptionFunc);
  }

  destruct() {
    this.jodit.events.off('onCustomPasteHTMLOption', this.onCustomPasteHTMLOptionFunc);
  }

  onCustomPasteHTMLOption(action, html) {
    if (action === 'insert_by_clean_paste') {
      return clean(html, this.jodit.options.cleanPasteAllowedAttributes, this.jodit.options.cleanPasteAllowedStyles);
    }
  }
}
