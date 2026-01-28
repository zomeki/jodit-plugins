import { Jodit } from 'jodit';
import Plugin from './plugin.js'

Jodit.plugins.add('block-normalizer', Plugin);

export default Plugin;
