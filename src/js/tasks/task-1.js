import Timer from "../utils/timer";
import {countFromTo} from "../utils/count-from-to";
import {TagName} from "../utils/enum";


export const initTaskOne = (formNode) => {
  const onFormStartBtnClick = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const target = evt.target;

    if (target.nodeName !== TagName.BUTTON) {
      return;
    }

    if (!form.reportValidity()) {
      return;
    }

    countFromTo(
        Number(form.querySelector(`#task-1l-I`).value),
        Number(form.querySelector(`#task-1l-J`).value),
        {
          delay: 1000,
          mod: Timer.Mod.CYCLE,
          type: Timer.Type.SET_TIMEOUT
        },
        (value) => {
          form.querySelector(`#task-1l-R`).value = value;
        }
    );

    countFromTo(
        Number(form.querySelector(`#task-1r-I`).value),
        Number(form.querySelector(`#task-1r-J`).value),
        {
          delay: 1000,
          mod: Timer.Mod.CYCLE,
          type: Timer.Type.SET_INTERVAL
        },
        (value) => {
          form.querySelector(`#task-1r-R`).value = value;
        }
    );
  };

  formNode.addEventListener(`click`, onFormStartBtnClick);
};
