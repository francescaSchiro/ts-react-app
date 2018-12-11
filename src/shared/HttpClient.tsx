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

function errorHandler(error: AxiosError): AxiosError {
  // tslint:disable-next-line:no-console
  console.error(`${error.name}: ${error.message}`);
  return error;
}

export function get(url: string, config?: AxiosRequestConfig): Promise<any> {
  return axios.get(url, config).then(
    (res: AxiosResponse): any => res.data,
    errorHandler
  );
}

export function post(url: string, data?: object, config?: AxiosRequestConfig): Promise<any> {
  return axios.post(url, data, config).then(
    (res: AxiosResponse): any => res.data,
    errorHandler
  );
}