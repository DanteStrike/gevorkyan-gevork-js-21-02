import {Method} from "../enum/enum";
import {toJSON} from "../utils/utils";
import ImgBB from "../adapters/img-bb";


class Api {
  constructor({endPoint, apiKey}) {
    this._endPoint = endPoint;
    this._apiKey = apiKey;
  }

  uploadImg(formData) {
    formData.set(`key`, this._apiKey);
    return this._load({
      url: `upload`,
      method: Method.POST,
      timeout: 10000,
      body: formData
    })
      .then(toJSON)
      .then((jsonData) => ImgBB.parseImg(jsonData.data));
  }
  _load({url, method = Method.GET, body = null, headers = new Headers(), timeout = 5000}) {
    const checkStatus = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    };

    return fetch(`${this._endPoint}/${url}`, {method, body, headers, timeout})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}


export default Api;
