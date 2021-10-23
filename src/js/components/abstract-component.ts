import {createElement} from '../utils/dom';
import {IAbstractComponent, Nullable} from "../types";


abstract class AbstractComponent implements IAbstractComponent {
  private element: Nullable<HTMLElement>;

  protected constructor() {
    this.element = null;
  }

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement(): void {
    this.element = null;
  }

  protected abstract getTemplate(): string
}


export default AbstractComponent;
