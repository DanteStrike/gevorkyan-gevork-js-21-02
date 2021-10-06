import getAllHTMLComments from "../utils/get-all-html-comments/get-all-html-comments";


const init = (taskNode) => {
  const task = {
    inputText: taskNode.querySelector(`#t6-input-text`),
    startButton: taskNode.querySelector(`.start-button`),
    resultTextArea: taskNode.querySelector(`#t6-output-result`),

    onStartButtonClick() {
      const comments = getAllHTMLComments(this.inputText.value);
      this.resultTextArea.value = (comments.length === 0) ? `not found` : comments.join(`\r\n`);
      comments.forEach((el) => alert(el));
    }
  };

  task.startButton.addEventListener(`click`, task.onStartButtonClick.bind(task));
};

export {init};
