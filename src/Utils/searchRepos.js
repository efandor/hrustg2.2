import { MESSAGES, URL } from '../components/Constants/constants';
import { Result } from '../components/Result/Result';
import {
  results, nameInput, lengthWarning, preloader, search
} from './render';
import { isShortLength } from './isShortLength';

export const searchRepos = async (event) => {
  event.preventDefault();
  nameInput.focus();

  try {
    if (!isShortLength(nameInput)) {
      results.innerHTML = '';
      results.style.listStyleType = 'decimal';
      search.append(preloader);

      const response = await fetch(`${URL}${nameInput.value}+in:name&page=1&per_page=10`);
      const repos = await response.json();

      preloader.remove();

      if (repos.items.length) {
        repos.items.forEach((repo) => {
          results.append(new Result({ data: repo }).element);
        });
      } else {
        results.style.listStyleType = 'none';
        results.append(new Result({ message: MESSAGES.NO_REPO }).element);
      }
    } else {
      lengthWarning.remove();
      nameInput.parentNode.append(lengthWarning);
    }
  } catch (error) {
    results.style.listStyleType = 'none';
    results.append(new Result({ message: MESSAGES.FETCH_ERROR }).element);
  }
};
