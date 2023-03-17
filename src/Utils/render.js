import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Search } from '../components/Search/Search';
import { LengthWarning } from '../components/LengthWarning/LengthWarning';
import { Results } from '../components/Results/Results';
import { Preloader } from '../components/Preloader/Preloader';
import { Footer } from '../components/Footer/Footer';
import { searchRepos } from './searchRepos';
import { checkInput } from './checkInput';
import cssSearch from '../components/Search/search.module.scss';

export const header = new Header().element;
export const main = new Main().element;
export const search = new Search().element;
export const lengthWarning = new LengthWarning().element;
export const preloader = new Preloader().element;
export const results = new Results().element;
export const footer = new Footer().element;

document.body.appendChild(header);
document.body.appendChild(main);
main.append(search);
search.append(results);
document.body.appendChild(footer);

const submitButton = document.querySelector(`.${cssSearch.submit}`);
export const nameInput = document.querySelector(`.${cssSearch.name}`);
export const render = () => {
  submitButton.addEventListener('click', searchRepos);
  nameInput.addEventListener('input', checkInput);
};

nameInput.focus();
