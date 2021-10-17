import {ElementType, Position} from './enum';


export const createElement = (template, type = ElementType.DEFAULT) => {
  const newElement = type === ElementType.DEFAULT ? document.createElement(`div`) : document.createElement(`tbody`);
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

    default:
      break;
  }
};
