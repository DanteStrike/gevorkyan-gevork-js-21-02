import Api from "./server/api";
import TableController from "./controllers/table-controller";
import serverConfig from "./configs/serverConfig";
import appConfig from "./configs/appConfig";
import {IApi, Nullable} from "./types";

const api: IApi = new Api(serverConfig);
const onPageChange = (pageNum: number) => {
  api.getPage(pageNum)
    .then((page) => {
      tableController.setPage(page);
    })
    .catch(() => {
      alert(`Connection error`);
      tableController.loadingModOFF();
    });
};

const container: Nullable<HTMLElement> = document.querySelector(`#root`);
if (container === null) {
  throw new Error(`Can't find root node`);
}
const tableController = new TableController(container, onPageChange);

api.getPage(appConfig.tableStartPage).then((page) => {
  tableController.setPage(page);
});

