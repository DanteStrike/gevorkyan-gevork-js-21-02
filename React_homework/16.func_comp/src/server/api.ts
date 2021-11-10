import {IApi, IServerConfig, IUsers} from '../types';

class Api implements IApi {
  private endPoint: string;

  private apiID: string;

  constructor({endPoint, apiID}: IServerConfig) {
    this.endPoint = endPoint;
    this.apiID = apiID;
  }

  getUsers(page: number, limit: number): Promise<IUsers> {
    return this.load({url: `user?page=${page}&limit=${limit}`}).then(
      (response: Response): Promise<IUsers> => response.json()
    );
  }

  private load({url = ``}): Promise<Response> {
    const checkStatus = (response: Response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      throw new Error(`${response.status}: ${response.statusText}`);
    };

    return fetch(`${this.endPoint}/${url}`, {
      headers: {
        'app-id': `${this.apiID}`,
      },
    })
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}

export default Api;
