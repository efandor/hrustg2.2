import DomElement from '../DomElement/DomElement';
import css from './results.module.scss';

export class Results {
    constructor() {
        this.element = new DomElement({
            className: css.results,
            type: 'ol',
        }).element;
    }
}
