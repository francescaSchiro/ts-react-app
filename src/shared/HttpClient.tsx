import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import { ENV, REQUEST } from 'src/config';

const AXIOS_CONFIG: AxiosRequestConfig = {
  baseURL: ENV.HOSTNAME_MSS + ENV.MGP,
  timeout: REQUEST.TIMEOUT,
  headers: {
    'Accept': REQUEST.HEADERS_ACCEPT,
    'Content-Type': REQUEST.HEADERS_CONTENTTYPE,
  },
};

const axios: AxiosInstance = Axios.create(AXIOS_CONFIG);

const errorHandler = (error: AxiosError): AxiosError => {
  // tslint:disable-next-line:no-console
  console.error(`${error.name}: ${error.message}`);
  return error;
}

const get = (url: string, config?: AxiosRequestConfig): Promise<any> => { // TODO
  return axios.get(url, config).then(
    (res: AxiosResponse): any => res.data,
    errorHandler
  );
}

const post = (url: string, data?: object, config?: AxiosRequestConfig): Promise<any> => { // TODO
  return axios.post(url, data, config).then(
    (res: AxiosResponse): any => res.data,
    errorHandler
  );
}

const all = (requests: Array<Promise<any>> = []): Promise<any> => { // TODO
  return Axios.all(requests)
    .then(Axios.spread((...params) => params));
}

export {
  get,
  post,
  all
}