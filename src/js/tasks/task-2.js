import truncateByDots from "../utils/truncate-by-dots/truncate-by-dots";

const init = (taskNode) => {
  const task = {
    validationForm: taskNode.querySelector(`#t2-form`),
    startButton: taskNode.querySelector(`.task__start`),
    inputBaseStr: taskNode.querySelector(`#t2-input-str`),
    inputAmount: taskNode.querySelector(`#t2-input-amount`),
    resultTextArea: taskNode.querySelector(`#t2-result`),

    onStartButtonClick() {
      this.resultTextArea.value = ``;
      this.validationForm.reportValidity();
      this.resultTextArea.value = truncateByDots(this.inputBaseStr.value, this.inputAmount.value);
    }
  };

  task.startButton.addEventListener(`click`, task.onStartButtonClick.bind(task));
};

export {init};
