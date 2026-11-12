import Jodit from './jodit.js';
import Plugin from './plugin.js';
import './index.scss';

Jodit.plugins.add('video-props', Plugin);
Plugin.requires = ['video-properties'];

export default Plugin;
