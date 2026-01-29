import Jodit from './jodit.js';
import Plugin from './plugin.js';
import lang from './lang.js';
import './index.scss';

Object.keys(lang).forEach(locale => {
  Jodit.lang[locale] = {
    ...Jodit.lang[locale],
    ...lang[locale]
  }
});

Jodit.plugins.add('iframe-props', Plugin);

export default Plugin;
