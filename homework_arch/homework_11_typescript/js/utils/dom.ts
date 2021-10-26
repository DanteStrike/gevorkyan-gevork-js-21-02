import {ElementType, Nullable, Position} from '../types';


export const createElement = (template: string, type = ElementType.DEFAULT): HTMLElement => {
  const newElement = (type === ElementType.DEFAULT) ?
    document.createElement(`div`) :
    document.createElement(`tbody`);

  newElement.innerHTML = template;

  if (newElement.firstChild === null) {
    throw new Error(`Can't create correct element`);
  }

  return newElement.firstChild as HTMLElement;
};

export const safeQuery = (container: HTMLElement, selector: string): HTMLElement => {
  const res: Nullable<HTMLElement> = container.querySelector(selector);
  if (res === null) {
    throw new Error(`Element not found`);
  }

  return res;
};

export const render = (container: HTMLElement, element: HTMLElement, place: Position): void => {
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

export const unmount = (element: HTMLElement): void => {
  if (element) {
    element.remove();
  }
};
