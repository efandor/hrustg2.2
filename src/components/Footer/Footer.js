import DomElement from '../DomElement/DomElement';
import css from './footer.module.scss';
export class Footer {
  constructor() {
    this.element = new DomElement({
      type: 'footer',
      className: css.footer,
      html: `
                <div class='${css.aboutFooter}'>
                    Repos search by Pavel Litvinov, 2023
                </div>
            `
    }).element;
  }
}
