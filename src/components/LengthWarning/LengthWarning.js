import DomElement from '../DomElement/DomElement';
import css from './lengthWarning.module.scss'

export class LengthWarning {
    constructor() {
        this.element = new DomElement({
            className: css.lengthWarning,
            html: `
              <span class='${css.text}'>Enter more than 3 symbols</span>
            `,
        }).element;
    }
}
