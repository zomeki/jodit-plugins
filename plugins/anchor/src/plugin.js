import icon from './images/icon.svg';

export default class AnchorPlugin {
  init(jodit) {
    this.jodit = jodit;

    jodit.options.controls.anchor = {
      name: 'anchor',
      icon: icon,
      tooltip: jodit.i18n('anchorSetAnchor'),
      popup: this.popup.bind(this),
      isActive: this.isActive.bind(this)
    };
  }

  popupHTML() {
    return `
      <form class="jodit-ui-form">
        <div class="jodit-ui-input">
          <span class="jodit-ui-input__label">${this.jodit.i18n('anchorAnchorID')}</span>
          <div class="jodit-ui-input__wrapper">
            <input type="text" class="jodit-ui-input__input" style="width: 150px;">
          </div>
        </div>
        <div class="jodit-ui-block">
          <button class="jodit-ui-button jodit-ui-button_variant_primary">${this.jodit.i18n('anchorSet')}</button>
        </div>
      </form>
    `;
  }

  popup(jodit, current, close) {
    const wrapper = jodit.createInside.fromHTML(this.popupHTML());
    const input = wrapper.querySelector('input');
    const button = wrapper.querySelector('button');
    const target = this.currentElement();

    if (target && target.id) {
      input.value = target.id;
    }

    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        button.click();
      }
    });

    button.addEventListener('click', event => {
      if (target) {
        const id = input.value.trim();
        if (id) {
          target.setAttribute('id', id);
        } else {
          target.removeAttribute('id');
        }
        jodit.synchronizeValues();
      }
      close();
    });

    return wrapper;
  }

  isActive(jodit) {
    const elem = this.currentElement();
    return elem && elem.hasAttribute('id');
  }

  currentElement() {
    const current = this.findCurrentElement();
    if (current === this.jodit.editor) return null;
    return current;
  }

  findCurrentElement() {
    const node = this.jodit.selection.current();
    if (!node) return null;

    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent === '\uFEFF' && node.previousElementSibling?.matches('jodit-media')) {
        return node.previousElementSibling.querySelector('video') || node.previousElementSibling.querySelector('audio');
      } else {
        return node.parentElement;
      }
    } else if (node.matches('jodit')) {
      return node.querySelector('iframe');
    }
    return node;
  }
}
