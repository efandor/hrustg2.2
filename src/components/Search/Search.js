import DomElement from '../DomElement/DomElement';
import css from './search.module.scss';

export class Search {
  constructor() {
    this.element = new DomElement({
      className: css.container,
      type: 'section',
      html: `
                    <form class='${css.form}'>
                        <div>
                            <input class='${css.name}' type='text' placeholder='Repository name'>
                        </div>
                        <button type='submit' class='${css.submit}'>
                            <span class='${css.text}'>Search</span>
                        </button>
                    </form>
            `
    }).element;
  }
}
