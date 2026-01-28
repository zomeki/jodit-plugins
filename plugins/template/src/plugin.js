import icon from './images/icon.svg';

export default class {
  static templates = [
    {
      name: 'sample_template',
      title: 'Sample Template',
      html: '<p>Sample template</p>'
    }
  ];

  init(jodit) {
    this.jodit = jodit;

    this.templateList = {};
    this.templateHTML = {};
    (jodit.options.templates || this.constructor.templates).forEach(template => {
      this.templateList[template.name] = template.title;
      this.templateHTML[template.name] = template.html;
    });

    jodit.options.controls.template = {
      name: 'template',
      icon: icon,
      tooltip: jodit.i18n('templateInsertTemplate'),
      list: this.templateList,
      exec: this.exec.bind(this)
    };
  }

  exec(jodit, current, { button }) {
    if (button.name === 'template') {
      return false;
    }
    const html = this.templateHTML[button.name];
    if (html) jodit.selection.insertHTML(html);
    return null;
  }
}
