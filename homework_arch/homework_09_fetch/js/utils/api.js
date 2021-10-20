import Page from "../adapters/page";


class Api {
  constructor(endPoint = `https://swapi.dev/api/people`) {
    this._endPoint = endPoint;
  }

  getPage(page = 1) {
    return this._load({url: `?page=${page}`})
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => Page.parsePage(jsonData));
  }

  _load({url, method = Api.Method.GET, body = null}) {
    const checkStatus = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    };

    return fetch(`${this._endPoint}/${url}`, {method, body})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}

Api.Method = {
  GET: `GET`
};


export default Api;
