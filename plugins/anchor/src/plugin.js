import Jodit from './jodit.js';
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

    this.afterEnterFunc = this.afterEnter.bind(this);
    jodit.events.on('afterEnter', this.afterEnterFunc);
  }

  destruct() {
    this.jodit.events.off('afterEnter', this.afterEnterFunc);
  }

  popup(jodit, current, close) {
    const { UIForm, UIInput, Button } = Jodit.modules;

    const form = new UIForm(this.jodit);

    const input = new UIInput(this.jodit, {
      name: 'id',
      label: 'anchorAnchorID'
    });

    const button = new Button(this.jodit, 'ok', 'anchorSet', 'primary');

    form.append(input);
    form.append(button);

    const target = this.currentElement();

    if (target && target.id) {
      input.value = target.id;
    }

    jodit.selection.save();

    button.onAction(() => {
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

    input.container.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        button.button.click();
        event.preventDefault();
      }
    });

    return form;
  }

  isActive(jodit) {
    const elem = this.currentElement();
    return elem && elem.hasAttribute('id');
  }

  afterEnter(event) {
    let current = this.jodit.selection.current()
    if (!current) return;
    if (current.nodeType !== 1) current = current.parentElement;

    const previous = current.previousElementSibling;
    if (!previous) return;

    if (current.hasAttribute('id') && previous.hasAttribute('id') && current.id === previous.id) {
      if (previous.childNodes.length === 1 && previous.childNodes[0].tagName == 'BR') {
        previous.removeAttribute('id');
      } else {
        current.removeAttribute('id');
      }
    }
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
        return node.previousElementSibling.querySelector('video, audio');
      } else {
        return node.parentElement;
      }
    } else if (node.matches('jodit')) {
      return node.querySelector('iframe');
    } else if (node.matches('jodit-media')) {
      return node.querySelector('video, audio');
    } else if (node.matches('span[id^="jodit-selection_marker"]')) {
      return node.parentNode;
    }
    return node;
  }
}
