import AbstractComponent from "./abstract-component";


class LoadingView extends AbstractComponent {
  constructor() {
    super();
  }

  _getTemplate() {
    return `<div class="table__loading"><div></div><div></div><div></div>`;
  }
}


export default LoadingView;
