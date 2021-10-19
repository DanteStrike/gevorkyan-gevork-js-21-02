import {countFromTo} from "../utils/count-from-to";
import Timer from "../utils/timer";
import {numWord} from "../utils/num-word";
import {TagName} from "../utils/enum";


export const initTaskTwo = (formNode) => {
  const onFormStartBtnClick = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const target = evt.target;

    if (target.nodeName !== TagName.BUTTON) {
      return;
    }

    countFromTo(
        10,
        0,
        {
          delay: 1000,
          mod: Timer.Mod.CYCLE
        },
        (value) => {
          form.querySelector(`.work-area__msg-num`).textContent = value;
          form.querySelector(`.work-area__msg-sec`).textContent = numWord(value, [`секунда`, `секунды`, `секунд`]);
          if (value === 0) {
            window.location = `https://maxima.life`;
          }
        }
    );
  };

  formNode.addEventListener(`click`, onFormStartBtnClick);
};
