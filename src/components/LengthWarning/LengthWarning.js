import DomElement from '../DomElement/DomElement';
import css from './lengthWarning.module.scss';

export class LengthWarning {
  constructor() {
    this.element = new DomElement({
      className: css.lengthWarning,
      type: 'span',
      html: 'Enter more than 3 symbols'
    }).element;
  }
}
