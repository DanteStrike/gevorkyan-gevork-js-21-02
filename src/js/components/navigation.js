import AbstractComponent from "./abstract-component";
import {Nav, TagName} from "../utils/enum";


class Navigation extends AbstractComponent {
  constructor(num = 0, onPrevBtnClick = () => {}, onNextBtnClick = () => {}) {
    super();

    this._onPrevBtnClick = onPrevBtnClick;
    this._onNextBtnClick = onNextBtnClick;

    this._prevButton = this.getElement().querySelector(`.table__nav-btn--prev`);
    this._nextButton = this.getElement().querySelector(`.table__nav-btn--next`);

    this._navNum = this.getElement().querySelector(`.table__nav-num`);
    this.getElement().addEventListener(`click`, (evt) => this._onNavClick(evt));

    this.navNum = num;
  }

  set navNum(num) {
    this._navNum.textContent = num;
  }

  disablePrevButton() {
    this._prevButton.disabled = true;
  }

  disableNextButton() {
    this._nextButton.disabled = true;
  }

  enablePrevButton() {
    this._prevButton.disabled = false;
  }

  enableNextButton() {
    this._nextButton.disabled = false;
  }

  _onNavClick(evt) {
    evt.preventDefault();
    const target = evt.target;

    if (target.nodeName !== TagName.BUTTON) {
      return;
    }

    switch (target.dataset.value) {
      case Nav.PREV:
        this._onPrevBtnClick();
        break;

      case Nav.NEXT:
        this._onNextBtnClick();
        break;
    }
  }

  _getTemplate() {
    return `<nav class="table__nav" >
                <button class="table__nav-btn table__nav-btn--prev" data-value="prev" disabled>Prev</button>
                <p class="table__nav-page">Page: <span class="table__nav-num"></span></p>
                <button class="table__nav-btn table__nav-btn--next" data-value="next" disabled>Next</button>
            </nav>`;
  }
}


export default Navigation;
