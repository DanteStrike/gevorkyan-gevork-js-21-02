import convertCamelToSnake from "../utils/convert-camel-to-snake/convert-camel-to-snake";

const init = (taskNode) => {
  const task = {
    validationForm: taskNode.querySelector(`#t5-form`),
    inputCamelCase: taskNode.querySelector(`#t5-input-camel-case`),
    startButton: taskNode.querySelector(`.start-button`),
    resultTextArea: taskNode.querySelector(`#t5-output-result`),

    onStartButtonClick() {
      this.resultTextArea.value = ``;

      const isValid = this.validationForm.reportValidity();
      if (!isValid) {
        return;
      }

      this.resultTextArea.value = convertCamelToSnake(this.inputCamelCase.value);
    }
  };

  task.startButton.addEventListener(`click`, task.onStartButtonClick.bind(task));
};

export {init};
