import { merge } from 'lodash';
import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { 
  ENV,
  REQUEST_TIMEOUT,
  REQUEST_HEADERS_ACCEPT,
  REQUEST_HEADERS_CONTENTTYPE 
} from 'src/config';

const DEFAULT_AXIOS_REQUEST_CONFIG: AxiosRequestConfig = {
  baseURL: ENV.HOSTNAME_MSS + ENV.MGP,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Accept': REQUEST_HEADERS_ACCEPT,
    'Content-Type': REQUEST_HEADERS_CONTENTTYPE,
  },
};

export default class HttpClient {
  private axios: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axios = Axios.create(merge({}, DEFAULT_AXIOS_REQUEST_CONFIG, config));
  }

  public get(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return this.axios.get(url, config).then(
      (res: AxiosResponse): any => res.data
    );
  }

  public post(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return this.axios.post(url, data, config).then(
      (res: AxiosResponse): any => res.data
    );
  }
}
