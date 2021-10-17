import tableData from "./mocks/table-data";
import TableController from "./controllers/table-controller";

const root = document.getElementById(`root`);
const tableController = new TableController({
  data: tableData,
  container: root
});
tableController.init();
