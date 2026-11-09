import Jodit from './jodit.js';
import Plugin from './plugin.js';
import { defaultAllowedAttributes, defaultAllowedStyles } from './clean';

Jodit.plugins.add('paste-patch', Plugin);
Jodit.defaultOptions.cleanPasteAllowedAttributes = defaultAllowedAttributes;
Jodit.defaultOptions.cleanPasteAllowedStyles = defaultAllowedStyles;

export default Plugin;
