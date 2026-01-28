import { Jodit } from 'jodit';
import Plugin from './plugin.js';

Jodit.plugins.add('paste-patch', Plugin);

export default Plugin;
