import { Result } from '../components/Result/Result';
import { results, nameInput, lengthWarning } from './render';
import { URL } from '../components/Constants/constants'
import { isShortLength } from './isShortLength';

export const searchRepos = async (event) => {
  event.preventDefault();
  
  try {
    if (!isShortLength(nameInput)) {
      results.innerHTML = '';
     
      const response = await fetch(`${URL}${nameInput.value}+in:name&page=1&per_page=10`);
      const repos = await response.json();

      if (repos.items.length ) {
        repos.items.forEach((repo) => {
          results.append(new Result(repo).element);
        });

        nameInput.value = '';
        nameInput.focus();
      } else {
        results.append(new Result().element)
      }
    } else {
      nameInput.parentNode.append(lengthWarning);
    }
  } catch (err) {
    console.warn(err);
  }
};
