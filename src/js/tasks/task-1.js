import verifyIsContaining from "../utils/verify-is-containing/verify-is-containing";

const init = (taskNode) => {
  const task = {
    startButton: taskNode.querySelector(`.task__start`),
    inputTextArea: taskNode.querySelector(`#t1-input`),
    errMsg: taskNode.querySelector(`.task__err`),
    firstStrTextArea: taskNode.querySelector(`#t1-string-1`),
    secondStrTextArea: taskNode.querySelector(`#t1-string-2`),
    resultTextArea: taskNode.querySelector(`#t1-result`),

    onStartButtonClick() {
      const userString = prompt(`Введите две строки через запятую`);

      if (userString === null) {
        this.errMsg.textContent = `Rejected by user`;

        return;
      }

      this.inputTextArea.value = userString;
      this.errMsg.textContent = ``;
      this.firstStrTextArea.value = ``;
      this.secondStrTextArea.value = ``;
      this.resultTextArea.value = ``;

      try {
        const output = verifyIsContaining(userString);

        this.firstStrTextArea.value = output.firstStr;
        this.secondStrTextArea.value = output.secondStr;
        this.resultTextArea.value = output.result;

      } catch (err) {
        const msg = `ERROR: ${err.message}`;

        alert(msg);
        this.errMsg.textContent = msg;
      }
    }
  };

  task.startButton.addEventListener(`click`, task.onStartButtonClick.bind(task));
};

export {init};
