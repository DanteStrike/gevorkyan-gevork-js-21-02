import AbstractComponent from "./abstract-component";
import {INavigation, Nav, TagName} from "../types";
import {safeQuery} from "../utils/dom";


class Navigation extends AbstractComponent implements INavigation {
  private prevButton: HTMLButtonElement
  private nextButton: HTMLButtonElement
  private curNumSpan: HTMLSpanElement
  private readonly onPrevBtnClick: () => void
  private readonly onNextBtnClick: () => void

  constructor({num, onPrevBtnClick, onNextBtnClick}: {num: number, onPrevBtnClick: () => void, onNextBtnClick: () => void}) {
    super();
    this.prevButton = safeQuery(this.getElement(), `.table__nav-btn--prev`) as HTMLButtonElement;
    this.nextButton = safeQuery(this.getElement(), `.table__nav-btn--next`) as HTMLButtonElement;
    this.curNumSpan = safeQuery(this.getElement(), `.table__nav-num`) as HTMLSpanElement;

    this.onPrevBtnClick = onPrevBtnClick;
    this.onNextBtnClick = onNextBtnClick;

    this.curNum = num;
    this.getElement().addEventListener(`click`, (evt: MouseEvent) => this.onNavClick(evt));
  }

  set curNum(num: number) {
    this.curNumSpan.textContent = num.toString();
  }

  disablePrevButton() {
    this.prevButton.disabled = true;
  }

  disableNextButton() {
    this.nextButton.disabled = true;
  }

  enablePrevButton() {
    this.prevButton.disabled = false;
  }

  enableNextButton() {
    this.nextButton.disabled = false;
  }

  private onNavClick(evt: MouseEvent) {
    evt.preventDefault();
    const target = evt.target as HTMLButtonElement;

    if (target.nodeName !== TagName.BUTTON) {
      return;
    }

    switch (target.dataset.value) {
      case Nav.PREV:
        this.onPrevBtnClick();
        break;

      case Nav.NEXT:
        this.onNextBtnClick();
        break;
    }
  }

  protected getTemplate(): string {
    return `<nav class="table__nav" >
                <button class="table__nav-btn table__nav-btn--prev" data-value="PREV" disabled>Prev</button>
                <p class="table__nav-page">Page: <span class="table__nav-num"></span></p>
                <button class="table__nav-btn table__nav-btn--next" data-value="NEXT" disabled>Next</button>
            </nav>`;
  }
}


export default Navigation;
