import validateCyrillicFullName from "../utils/validate-cyrillic-full-name/validate-cyrillic-full-name";

const init = (taskNode) => {
  const task = {
    inputFullName: taskNode.querySelector(`#t4-input-full-name`),
    startButton: taskNode.querySelector(`.start-button`),
    resultTextArea: taskNode.querySelector(`#t4-output-result`),

    onStartButtonClick() {
      this.resultTextArea.value = ``;

      const isValid = validateCyrillicFullName(this.inputFullName.value);
      this.resultTextArea.value = isValid ? `Проверка пройдена` : `ФИО не соответвует требованиям`;
    }
  };

  task.startButton.addEventListener(`click`, task.onStartButtonClick.bind(task));
};

export {init};
