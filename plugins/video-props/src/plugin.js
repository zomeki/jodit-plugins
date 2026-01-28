import { Jodit } from 'jodit';

export default class {
  init(jodit) {
    this.jodit = jodit;

    this.onDblClickFunc = this.onDblClick.bind(this);
    this.jodit.events.on('dblclick', this.onDblClickFunc);
  }

  destruct() {
    this.jodit.events.off('dblclick', this.onDblClickFunc);
  }

  onDblClick(event) {
    if (event.target.tagName === 'JODIT-MEDIA') {
      const video = event.target.querySelector('video');
      if (video) {
        this.showDialog(video, event.target);
        event.preventDefault();
      }
    }
  }

  showDialog(video, wrapper) {
    const dialog = this.jodit.dlg({
      closeOnClickOverlay: true,
      closeOnEsc: true,
      buttons: ['fullsize', 'dialog.close']
    });

    const { UIForm, UIInput, Button } = Jodit.modules;

    const form = new UIForm(this.jodit);
    form.container.classList.add('jodit-ui-form__video-properties');

    const input = {
      src: new UIInput(this.jodit, {
        name: 'src',
        label: 'URL',
        required: true
      }),
      width: new UIInput(this.jodit, {
        name: 'width',
        label: this.jodit.i18n('Width')
      }),
      height: new UIInput(this.jodit, {
        name: 'height',
        label: this.jodit.i18n('Height')
      }),
      poster: new UIInput(this.jodit, {
        name: 'poster',
        label: this.jodit.i18n('videoPropsPosterURL')
      })
    };

    form.append(Object.values(input));

    this.read(video, input);

    const button = {
      cancel: new Button(this.jodit, 'cancel', 'Cancel'),
      apply: new Button(this.jodit, 'ok', 'Apply', 'primary')
    };

    button.apply.onAction(() => {
      if (form.validate()) {
        this.write(video, wrapper, input);
        this.jodit.synchronizeValues();
        dialog.close();
      }
    });

    button.cancel.onAction(() => {
      dialog.close();
    });

    dialog.setHeader(this.jodit.i18n('videoPropsProperties'));
    dialog.setContent(form);
    dialog.setFooter(Object.values(button));
    dialog.setSize(500, 400);

    dialog.open();
    dialog.setModal(true);
  }

  read(video, input) {
    ['src', 'width', 'height', 'poster'].forEach(key => {
      input[key].value = video.getAttribute(key) || '';
    });
  }

  write(video, wrapper, input) {
    ['src', 'width', 'height', 'poster'].forEach(key => {
      if (input[key].value) {
        video.setAttribute(key, input[key].value);
      } else {
        video.removeAttribute(key);
      }
    });

    ['width', 'height'].forEach(key => {
      if (input[key].value) {
        wrapper.style[key] = `${input[key].value}px`;
      } else {
        wrapper.style[key] = '';
      }
    });
  }
}
