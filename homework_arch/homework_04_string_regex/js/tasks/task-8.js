import validateDocumentID from "../utils/validate-document-id/validate-document-id";

const init = (taskNode) => {
  const task = {
    startButton: taskNode.querySelector(`.start-button`),

    onStartButtonClick() {
      let isValid = false;
      do {
        const documentID = prompt(`Введите ID документа в формате хххх-хххх-хххх-хххх или хххххххххххххххх`);

        if (documentID === null) {
          return;
        }

        isValid = validateDocumentID(documentID);
        if (isValid) {
          alert(`ведётся поиск`);
        } else {
          alert(`неверный идентификатор`);
        }
      } while (!isValid);
    }
  };

  task.startButton.addEventListener(`click`, task.onStartButtonClick.bind(task));
};

export {init};
