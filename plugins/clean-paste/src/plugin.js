import clean from './clean';
import './paste-from-word-patch';

export default class {
  init(jodit) {
    this.jodit = jodit;

    this.jodit.events.on('onCustomPasteHTMLOption', (action, html) => {
      if (action === 'insert_by_clean_paste') {
        return clean(html);
      }
    });
  }
}
