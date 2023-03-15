import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Search } from '../components/Search/Search';
import { LengthWarning } from '../components/LengthWarning/LengthWarning';
import { Results } from '../components/Results/Results';
import { Footer } from '../components/Footer/Footer';
import { searchRepos } from './searchRepos';
import { checkInput } from './checkInput';
import cssSearch from '../components/Search/search.module.scss'

export const header = new Header().element;
export const main = new Main().element;
export const search = new Search().element;
export const lengthWarning = new LengthWarning().element;
export const results = new Results().element;
export const footer = new Footer().element;

document.body.appendChild(header);
document.body.appendChild(main);
main.append(search);
search.append(results)
document.body.appendChild(footer);

export const nameInput = document.querySelector(`.${cssSearch.name}`);
nameInput.focus();

const submitButton = document.querySelector(`.${cssSearch.submit}`);
const form = document.querySelector(`.${cssSearch.form}`);

export const render = () => {
    submitButton.addEventListener('click', searchRepos);
    nameInput.addEventListener('input', checkInput);
}
