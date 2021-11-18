import {IApi, IServerConfig, IUser, IUsers, Method} from '../types';

class Api implements IApi {
  private readonly endPoint: string;

  private readonly apiID: string;

  constructor({endPoint, apiID}: IServerConfig) {
    this.endPoint = endPoint;
    this.apiID = apiID;
  }

  getUser(id: string): Promise<IUser> {
    return this.load({url: `user/${id}`}).then((response: Response): Promise<IUser> => response.json());
  }

  getUsers(page: number, limit: number): Promise<IUsers> {
    return this.load({url: `user?page=${page}&limit=${limit}`}).then(
      (response: Response): Promise<IUsers> => response.json()
    );
  }

  createUser(data: IUser): Promise<IUser> {
    return this.load({
      url: `user/create`,
      method: Method.POST,
      headers: new Headers({'Content-type': `application/json`}),
      body: JSON.stringify(data),
    }).then((response: Response): Promise<IUser> => response.json());
  }

  private load({
    url = ``,
    headers = new Headers(),
    method = Method.GET,
    body = null,
  }: {
    url: string;
    headers?: Headers;
    method?: Method;
    body?: BodyInit | null;
  }): Promise<Response> {
    const checkStatus = (response: Response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }

      throw new Error(`${response.status}: ${response.statusText}`);
    };
    headers.append('app-id', `${this.apiID}`);

    return fetch(`${this.endPoint}/${url}`, {
      headers,
      method,
      body,
    })
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}

export default Api;
