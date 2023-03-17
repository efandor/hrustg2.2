import { nameInput, lengthWarning } from './render';
import { isShortLength } from './isShortLength';

export const checkInput = (event) => {
  event.preventDefault();

  if (isShortLength(nameInput)) {
    nameInput.parentNode.append(lengthWarning);
  } else {
    lengthWarning.remove();
  }
};
