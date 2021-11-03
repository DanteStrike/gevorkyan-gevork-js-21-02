export const enum Theme {
  LIGHT = `light`,
  DARK = `dark`,
}

export interface IUserPreview {
  id: string;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IUsers {
  data: IUserPreview[];
  total: number;
  page: number;
  limit: number;
}

export interface IServerConfig {
  endPoint: string;
  apiID: string;
}

export interface IApi {
  getUsers: (page?: number, limit?: number) => Promise<IUsers>;
}
