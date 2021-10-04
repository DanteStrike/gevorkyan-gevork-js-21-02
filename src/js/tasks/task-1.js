import verifyIsContaining from "../utils/verify-is-containing/verify-is-containing";

const init = (taskNode) => {
  const task = {
    startButton: taskNode.querySelector(`.start-button`),
    inputTextArea: taskNode.querySelector(`#t1-output-promt`),
    errMsg: taskNode.querySelector(`.err`),
    firstStrTextArea: taskNode.querySelector(`#t1-output-str1`),
    secondStrTextArea: taskNode.querySelector(`#t1-output-str2`),
    resultTextArea: taskNode.querySelector(`#t1-output-result`),

    onStartButtonClick() {
      const userString = prompt(`Введите две строки через запятую`);

      this.inputTextArea.value = userString;
      this.errMsg.textContent = ``;
      this.firstStrTextArea.value = ``;
      this.secondStrTextArea.value = ``;
      this.resultTextArea.value = ``;

      if (userString === null) {
        this.errMsg.textContent = `Rejected by user`;

        return;
      }

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
