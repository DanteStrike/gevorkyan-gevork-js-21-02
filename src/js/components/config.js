import {TagName} from "../utils/enum";
import AbstractComponent from "./abstract-component";


class Config extends AbstractComponent {
  constructor({borderColor, backgroundColor, fontColor, onBorderColorChange, onBackgroundColorChange, onFontColorChange}) {
    super();

    this._options = this.getElement().querySelector(`.config__options`);
    this._borderColorInput = this.getElement().querySelector(`#config-border-color`);
    this._backgroundColorInput = this.getElement().querySelector(`#config-background-color`);
    this._fontColorInput = this.getElement().querySelector(`#config-font-color`);

    this._borderColorInput.value = borderColor;
    this._onBorderColorChange = onBorderColorChange;

    this._backgroundColorInput.value = backgroundColor;
    this._onBackgroundColorChange = onBackgroundColorChange;

    this._fontColorInput.value = fontColor;
    this._onFontColorChange = onFontColorChange;

    this._initHandlers();
  }

  _initHandlers() {
    this._options.addEventListener(`input`, (evt) => this._onOptionsChange(evt));
  }

  _onOptionsChange(evt) {
    evt.preventDefault();
    const target = evt.target;

    if (target.nodeName !== TagName.INPUT) {
      return;
    }

    switch (target.id) {
      case `config-border-color`:
        this._onBorderColorChange(target.value);
        return;

      case `config-background-color`:
        this._onBackgroundColorChange(target.value);
        return;

      case `config-font-color`:
        this._onFontColorChange(target.value);
        return;

      default:
        return;
    }
  }

  _getTemplate() {
    return `<nav class="table__config config">
          <h3 class="config__title">Уравление стилями таблицы</h3>
          <ul class="config__options">
            <li class="config__option">
              <label class="config__label" for="config-border-color">Цвет границ</label>
              <input class="config__input" type="color" name="config-border-color" id="config-border-color">
            </li>
            <li class="config__option">
              <label class="config__label" for="config-background-color">Цвет фона</label>
              <input class="config__input" type="color" name="config-background-color" id="config-background-color">
            </li>
            <li class="config__option">
              <label class="config__label" for="config-font-color">Цвет текста</label>
              <input class="config__input" type="color" name="config-font-color" id="config-font-color">
            </li>
          </ul>
        </nav>`;
  }
}


export default Config;
