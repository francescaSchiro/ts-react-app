import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { merge } from 'lodash';

export const DEFAULT_AXIOS_REQUEST_CONFIG: AxiosRequestConfig = {
    baseURL: '/app/fake/',
    timeout: 15000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
};

export default class HttpClient {

    private axios: AxiosInstance;

    constructor(config?: AxiosRequestConfig) {
        this.axios = Axios.create(merge({}, DEFAULT_AXIOS_REQUEST_CONFIG, config));
    }

    public get(
        url: string,
        config?: AxiosRequestConfig,
        doneCb = (res: AxiosResponse): any => res.data,
        errorCb = (err: AxiosError): any => err): Promise<any> {

        return this.axios.get(url, config)
            .then(doneCb, errorCb);
    }

    public post(
        url: string,
        data?: object,
        config?: AxiosRequestConfig,
        doneCb = (res: AxiosResponse): any => res.data,
        errorCb = (err: AxiosError): any => err): Promise<any> {

        return this.axios.post(url, data, config)
            .then(doneCb, errorCb);
    }
}