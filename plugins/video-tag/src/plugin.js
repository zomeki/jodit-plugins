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

  popupHTML() {
    return `
      <form class="jodit-ui-form">
        <div class="jodit-ui-input">
          <span class="jodit-ui-input__label">URL</span>
          <div class="jodit-ui-input__wrapper">
            <input type="text" placeholder="https://" class="jodit-ui-input__input" style="width: 150px;">
          </div>
        </div>
        <div class="jodit-ui-block">
          <button class="jodit-ui-button jodit-ui-button_variant_primary">${this.jodit.i18n('Insert')}</button>
        </div>
      </form>
    `;
  }

  popup(jodit, current, close) {
    const wrapper = jodit.createInside.fromHTML(this.popupHTML());
    const input = wrapper.querySelector('input');
    const button = wrapper.querySelector('button');

    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        button.click();
      }
    });

    jodit.selection.save();

    button.addEventListener('click', event => {
      if (input.value) {
        const html = this.buildHTML(input.value);
        jodit.selection.restore();
        jodit.selection.insertHTML(html);
      }
      close();
    });

    return wrapper;
  }

  buildHTML(url) {
    const width = this.jodit.options.video.defaultWidth;
    const height = this.jodit.options.video.defaultHeight;
    const html = this.jodit.options.video.parseUrlToVideoEmbed(url, { width: width, height: height });
    if (html !== url) return html;
    return `<video controls src="${url}" width="${width}" height="${height}"></video>`;
  }
}
