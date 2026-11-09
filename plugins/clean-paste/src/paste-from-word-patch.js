import Jodit from './jodit.js';
import clean from './clean';

const plugin = Jodit.plugins.get('paste-from-word');

if (plugin) {
  const original = plugin.prototype.insertFromWordByType;
  plugin.prototype.insertFromWordByType = function(e, html, insertType, texts) {
    if (insertType === 'insert_by_clean_paste') {
      this.j.selection.insertHTML(clean(html, this.j.options.cleanPasteAllowedAttributes, this.j.options.cleanPasteAllowedStyles));
    } else {
      original.apply(this, [e, html, insertType, texts]);
    }
  };
}
