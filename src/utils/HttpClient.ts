import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const DEFAULT_AXIOS_REQUEST_CONFIG: AxiosRequestConfig = {
    baseURL: '/app/fake/',
    timeout: 15000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
};

export default class HttpClient {

    axios: AxiosInstance;

    constructor(config?: AxiosRequestConfig) {
        this.axios = Axios.create(Object.assign({}, DEFAULT_AXIOS_REQUEST_CONFIG, config));
    }

    public get(
        url: string,
        config: AxiosRequestConfig,
        doneCb = (res: object) => res,
        errorCb = (err: object) => err): Promise<any> {

        return this.axios.get(url, config)
            .then(doneCb)
            .catch(errorCb);
    }

    public post(
        url: string,
        data: object,
        config: AxiosRequestConfig,
        doneCb = (res: object) => res,
        errorCb = (err: object) => err): Promise<any> {

        return this.axios.post(url, data, config)
            .then(doneCb)
            .catch(errorCb);
    }
}