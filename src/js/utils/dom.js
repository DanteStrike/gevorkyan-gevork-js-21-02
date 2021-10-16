import {Position} from './enum';


export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
    case Position.AFTEREND:
      container.insertAdjacentElement(place, element);
      break;
  }
};

export const unmount = (element) => {
  if (element) {
    element.remove();
  }
};
