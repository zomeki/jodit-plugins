import Jodit from './jodit.js';
import Plugin from './plugin.js';
import lang from './lang.js';

Object.keys(lang).forEach(locale => {
  Jodit.lang[locale] = {
    ...Jodit.lang[locale],
    ...lang[locale]
  }
});

Jodit.plugins.add('table-caption', Plugin);

export default Plugin;
