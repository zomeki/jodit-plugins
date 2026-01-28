import { Jodit } from 'jodit';
import Plugin from './plugin.js';
import lang from './lang.js';

Object.keys(lang).forEach(locale => {
  Jodit.lang[locale] = {
    ...Jodit.lang[locale],
    ...lang[locale]
  }
});

Jodit.plugins.add('video-tag', Plugin);

export default Plugin;
