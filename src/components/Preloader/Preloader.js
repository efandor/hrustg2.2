import DomElement from '../DomElement/DomElement';
import css from './preloader.module.scss';

export class Preloader {
  constructor() {
    this.element = new DomElement({
      className: css.preloader,
      html: `
                    <div class='${css.line} ${css.topLine}'></div>
                    <div class='${css.line}'></div>
                    <div class='${css.line}'></div>
                    <div class='${css.line}'></div>
            `
    }).element;
  }
}
