export const enum Theme {
  LIGHT = `light`,
  DARK = `dark`,
}

export const enum Method {
  GET = 'GET',
  POST = 'POST',
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

export interface IUser extends IUserPreview {
  gender: 'male' | 'female' | 'other' | '';
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
}

export interface IServerConfig {
  endPoint: string;
  apiID: string;
}

export interface IApi {
  createUser: (firstName: string, lastName: string, email: string) => Promise<IUser>;
  getUser: (id: string) => Promise<IUser>;
  getUsers: (page: number, limit: number) => Promise<IUsers>;
}