import DomElement from '../DomElement/DomElement';
import css from './result.module.scss';

export class Result {
    constructor(data = false) {
        let html = `<div class='${css.container}'>`;

        if (data) {
            html += `<a class='${css.name}' href='${data.html_url}' target='_blank'>${data.full_name}</a>`;

            if (data.description) {
                html += `<span class='${css.description}'>${data.description}</span>`;
            }

            if (data.language) {
                html += `<span class='${css.description}'>Language: ${data.language}</span>`;
            }

            html += `<span class='${css.description}'>Last updated: ${data.updated_at.slice(0,10)}</span></div>`;
        } else {
            html += `<span class='${css.message}'>No repositories found</span></div>`
        }

        this.element = new DomElement({
            className: css.result,
            type: 'li',
            html,
        }).element;
    }
}
