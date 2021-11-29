import axios from 'axios';

const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://dummyapi.io/data/v1`,
    timeout: 10000,
    headers: {
      'app-id': '619a3ac68a32ffd11ccdeea6',
    },
  });

  return api;
};

export default configureAPI;
