import getAllNumbers from "../utils/get-all-numbers/get-all-numbers";


const init = (taskNode) => {
  const task = {
    inputText: taskNode.querySelector(`#t7-input-text`),
    startButton: taskNode.querySelector(`.start-button`),
    resultTextArea: taskNode.querySelector(`#t7-output-result`),

    onStartButtonClick() {
      const nums = getAllNumbers(this.inputText.value);
      this.resultTextArea.value = (nums.length === 0) ? `not found` : nums.join(`\r\n`);
      nums.forEach((el) => alert(el));
    }
  };

  task.startButton.addEventListener(`click`, task.onStartButtonClick.bind(task));
};

export {init};
