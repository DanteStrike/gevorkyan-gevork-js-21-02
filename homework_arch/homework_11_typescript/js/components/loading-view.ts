import AbstractComponent from "./abstract-component";
import {ILoadingView} from "../types";


class LoadingView extends AbstractComponent implements ILoadingView {
  constructor() {
    super();
  }

  protected getTemplate(): string {
    return `<div class="table__loading"><div></div><div></div><div></div>`;
  }
}


export default LoadingView;
