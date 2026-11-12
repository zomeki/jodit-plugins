export default class {
  init(jodit) {
    this.jodit = jodit;

    const videoPlugin = jodit.__plugins['video-properties'];
    this.form = videoPlugin.form;
    this.buttons = videoPlugin.__buttons;
    this.addTitleInput();

    this.onDblClick = this.onDblClick.bind(this);
    this.onOpenVideoProperties = this.onOpenVideoProperties.bind(this);
    this.onApply = this.onApply.bind(this);

    jodit.events.on('dblclick', this.onDblClick);
    jodit.events.on('openVideoProperties', this.onOpenVideoProperties);
    this.buttons.check.container.addEventListener('click', this.onApply, true);
  }

  destruct() {
    this.jodit.events.off('dblclick', this.onDblClick);
    this.jodit.events.off('openVideoProperties', this.onOpenVideoProperties);
    this.buttons.check.container.removeEventListener('click', this.onApply, true);
  }

  onDblClick(event) {
    this.media = this.getMediaElement(event.target);
    if (!this.media) return;

    this.jodit.events.fire('openVideoProperties', this.media);
    event.preventDefault();
  }

  onOpenVideoProperties(target) {
    this.media = this.getMediaElement(target);
    if (!this.media) return;

    const input = this.getTitleInput();
    input.value = this.media.getAttribute('title') || '';
  }

  onApply() {
    const title = this.getTitleInput().value;

    if (title) {
      this.media.setAttribute('title', title);
    } else {
      this.media.removeAttribute('title');
    }
  }

  getMediaElement(target) {
    return target.closest('jodit-media, jodit')?.querySelector('video, audio, iframe');
  }

  addTitleInput() {
    const document = this.form.container.ownerDocument;

    const group = document.createElement('div');
    group.className = 'jodit-form__group jodit-ui-video-properties-form__editTitle';

    const label = document.createElement('label');
    label.textContent = this.jodit.i18n('Title');

    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'title';
    input.className = 'jodit-input jodit-ui-video-properties-form__title';

    group.append(label, input);
    this.form.container.prepend(group);
  }

  getTitleInput() {
    return this.form.container.querySelector('.jodit-ui-video-properties-form__title');
  }
}
