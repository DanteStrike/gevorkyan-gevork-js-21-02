import Page from "../adapters/page";
import {IApi, IPage, Method, PageData} from "../types";


class Api implements IApi {
  private endPoint: string;

  constructor({endPoint = ``}) {
    this.endPoint = endPoint;
  }

  getPage(page: number): Promise<IPage> {
    return this.load({url: `?page=${page}`})
      .then((response: Response): Promise<PageData> => response.json())
      .then((jsonData: PageData): IPage => Page.parsePage(jsonData));
  }

  private load({url = ``, method = Method.GET}): Promise<Response> {
    const checkStatus = (response: Response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    };

    return fetch(`${this.endPoint}/${url}`, {method})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}


export default Api;
