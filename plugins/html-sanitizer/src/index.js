import { Jodit } from 'jodit';
import Plugin from './plugin.js';

Jodit.plugins.add('html-sanitizer', Plugin);

export default Plugin;
