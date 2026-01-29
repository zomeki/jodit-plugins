import Jodit from './jodit.js';

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
      const audio = event.target.querySelector('audio');
      if (audio) {
        this.showDialog(audio, event.target);
        event.preventDefault();
      }
    }
  }

  showDialog(audio, wrapper) {
    const dialog = this.jodit.dlg({
      closeOnClickOverlay: true,
      closeOnEsc: true,
      buttons: ['fullsize', 'dialog.close']
    });

    const { UIForm, UIInput, Button } = Jodit.modules;

    const form = new UIForm(this.jodit);
    form.container.classList.add('jodit-ui-form__audio-properties');

    const input = {
      src: new UIInput(this.jodit, {
        name: 'src',
        label: 'URL',
        required: true
      })
    };

    form.append(Object.values(input));

    this.read(audio, input);

    const button = {
      cancel: new Button(this.jodit, 'cancel', 'Cancel'),
      apply: new Button(this.jodit, 'ok', 'Apply', 'primary')
    };

    button.apply.onAction(() => {
      if (form.validate()) {
        this.write(audio, input);
        this.jodit.synchronizeValues();
        dialog.close();
      }
    });

    button.cancel.onAction(() => {
      dialog.close();
    });

    dialog.setHeader(this.jodit.i18n('audioPropsProperties'));
    dialog.setContent(form);
    dialog.setFooter(Object.values(button));
    dialog.setSize(500, 400);

    dialog.open();
    dialog.setModal(true);
  }

  read(audio, input) {
    input.src.value = audio.src || '';
  }

  write(audio, input) {
    audio.src = input.src.value;
  }
}
