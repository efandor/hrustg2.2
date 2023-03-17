import DomElement from '../DomElement/DomElement';
import css from './main.module.scss';
export class Main {
  constructor() {
    this.element = new DomElement({
      type: 'main',
      className: css.main
    }).element;
  }
}
