import Jodit from './jodit.js';
import Plugin from './plugin.js';
import { defaultAllowedStyles } from './clean';

Jodit.defaultOptions.cleanPasteAllowedStyles = defaultAllowedStyles;
Jodit.plugins.add('paste-patch', Plugin);

export default Plugin;
