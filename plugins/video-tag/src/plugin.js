import Jodit from './jodit.js';
import icon from './images/icon.svg';

export default class {
  init(jodit) {
    this.jodit = jodit;

    jodit.options.controls.videoTag = {
      name: 'videoTag',
      icon: icon,
      tooltip: jodit.i18n('videoTagInsertVideo'),
      popup: this.popup.bind(this)
    };
  }

  popup(jodit, current, close) {
    const { UIForm, UIInput, Button } = Jodit.modules;

    const form = new UIForm(this.jodit);

    const input = new UIInput(this.jodit, {
      name: 'url',
      label: 'URL',
      required: true,
      placeholder: 'https://'
    });

    const button = new Button(this.jodit, 'ok', 'Insert', 'primary');

    form.append(input);
    form.append(button);

    jodit.selection.save();

    button.onAction(() => {
      if (form.validate()) {
        const html = this.buildHTML(input.value);
        jodit.selection.restore();
        jodit.selection.insertHTML(html);
        close();
      }
    });

    input.container.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        button.button.click();
        event.preventDefault();
      }
    });

    return form;
  }

  buildHTML(url) {
    const width = this.jodit.options.video.defaultWidth;
    const height = this.jodit.options.video.defaultHeight;
    const html = this.jodit.options.video.parseUrlToVideoEmbed(url, { width: width, height: height });
    if (html !== url) return html;
    return `<video controls src="${url}" width="${width}" height="${height}"></video>`;
  }
}
