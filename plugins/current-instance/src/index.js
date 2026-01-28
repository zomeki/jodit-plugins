import { Jodit } from 'jodit';
import Plugin from './plugin.js';

Jodit.plugins.add('current-instance', Plugin);

export default Plugin;
