export default class DomElement {
  constructor({ type = 'div', className = '', html = '' } = {}) {
    this.element = document.createElement(type);
    this.element.innerHTML = html;

    className.split(' ').forEach(this.addClass.bind(this));
  }

  addClass(className) {
    if (className) this.element.classList.add(className);
  }
}
