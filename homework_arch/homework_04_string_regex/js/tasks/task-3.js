import convertDate from "../utils/convert-date/convert-date";

const init = (taskNode) => {
  const task = {
    validationForm: taskNode.querySelector(`#t3-form`),
    inputDate: taskNode.querySelector(`#t3-input-date`),
    startButton: taskNode.querySelector(`.start-button`),
    errMsg: taskNode.querySelector(`.err`),
    resultTextArea: taskNode.querySelector(`#t3-output-result`),

    onStartButtonClick() {
      this.errMsg.textContent = ``;
      this.resultTextArea.value = ``;

      const isValid = this.validationForm.reportValidity();
      if (!isValid) {
        return;
      }

      const output = convertDate(this.inputDate.value);
      this.errMsg.textContent = output.isReachable ? `` : `WARNING: Impossible Date`;
      this.resultTextArea.value = output.result;
    }
  };

  task.startButton.addEventListener(`click`, task.onStartButtonClick.bind(task));
};

export {init};
