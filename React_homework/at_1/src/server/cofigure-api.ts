import axios from "axios";

const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://dummyapi.io/data/v1`,
    timeout: 5000,
    headers: {
      'app-id': '619a3ac68a32ffd11ccdeea6',
    }
  });
  api.defaults.headers.post['Content-type'] = 'application/json'

  return api;
}

export default configureAPI;
