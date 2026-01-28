import { Jodit } from 'jodit';

export default class {
  init(jodit) {
    this.jodit = jodit;

    this.onDblClickFunc = this.onDblClick.bind(this);
    jodit.events.on('dblclick', this.onDblClickFunc);
  }

  destruct() {
    this.jodit.events.off('dblclick', this.onDblClickFunc);
  }

  onDblClick(event) {
    if (event.target.tagName === 'JODIT') {
      const iframe = event.target.querySelector('iframe');
      if (iframe) {
        this.showDialog(iframe, event.target);
        event.preventDefault();
      }
    }
  }

  showDialog(iframe, wrapper) {
    const dialog = this.jodit.dlg({
      closeOnClickOverlay: true,
      closeOnEsc: true,
      buttons: ['fullsize', 'dialog.close']
    });

    const { UIForm, UIInput, Button } = Jodit.modules;

    const form = new UIForm(this.jodit);
    form.container.classList.add('jodit-ui-form__iframe-properties');

    const input = {
      src: new UIInput(this.jodit, {
        name: 'src',
        label: 'URL',
        required: true
      }),
      width: new UIInput(this.jodit, {
        name: 'width',
        label: this.jodit.i18n('iframePropsWidth')
      }),
      height: new UIInput(this.jodit, {
        name: 'height',
        label: this.jodit.i18n('iframePropsHeight')
      }),
      title: new UIInput(this.jodit, {
        name: 'title',
        label: this.jodit.i18n('iframePropsTitle')
      })
    };

    form.append(Object.values(input));

    this.read(iframe, input);

    const button = {
      cancel: new Button(this.jodit, 'cancel', 'Cancel'),
      apply: new Button(this.jodit, 'ok', 'Apply', 'primary')
    };

    button.apply.onAction(() => {
      if (form.validate()) {
        this.write(iframe, wrapper, input);
        this.jodit.synchronizeValues();
        dialog.close();
      }
    });

    button.cancel.onAction(() => {
      dialog.close();
    });

    dialog.setHeader(this.jodit.i18n('iframePropsProperties'));
    dialog.setContent(form);
    dialog.setFooter(Object.values(button));
    dialog.setSize(500, 400);

    dialog.open();
    dialog.setModal(true);
  }

  read(iframe, input) {
    ['src', 'width', 'height', 'title'].forEach(key => {
      input[key].value = iframe.getAttribute(key) || '';
    });
  }

  write(iframe, wrapper, input) {
    ['src', 'width', 'height', 'title'].forEach(key => {
      if (input[key].value) {
        iframe.setAttribute(key, input[key].value);
        wrapper.style[key] = input[key].value;
      } else {
        iframe.removeAttribute(key);
        wrapper.style[key] = '';
      }
    });

    ['width', 'height'].forEach(key => {
      if (input[key].value) {
        wrapper.style[key] = input[key].value;
      } else {
        wrapper.style[key] = '';
      }
    });
  }
}
