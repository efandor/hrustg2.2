import { nameInput, lengthWarning } from './render';
import { isShortLength } from './isShortLength';

export const checkInput = (event) => {
  event.preventDefault();

  isShortLength(nameInput) ? nameInput.parentNode.append(lengthWarning) : lengthWarning.remove();
}
