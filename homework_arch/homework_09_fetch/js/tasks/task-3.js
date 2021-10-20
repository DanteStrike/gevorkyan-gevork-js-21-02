import Api from "../utils/api";
import TableController from "../controllers/table-controller";

export const initTaskThree = (container) => {
  const api = new Api();

  const onPageChange = (pageNum) => {
    api.getPage(pageNum)
      .then((page) => {
        tableController.setPage(page);
      })
      .catch(() => {
        alert(`Connection error`);
        tableController.loadingModOFF();
      });
  };

  const tableController = new TableController(container, onPageChange);

  api.getPage().then((page) => {
    tableController.setPage(page);
  });
};
