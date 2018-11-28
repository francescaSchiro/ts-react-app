import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise } from 'axios';
import { merge } from 'lodash';

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
        this.axios = Axios.create(merge({}, DEFAULT_AXIOS_REQUEST_CONFIG, config));
    }

    public get(
        url: string,
        config?: AxiosRequestConfig,
        doneCb = (res: AxiosResponse): any => res,
        errorCb = (err: AxiosError): any => err): AxiosPromise {

        const promise: AxiosPromise = this.axios.get(url, config);
        promise.then(doneCb, errorCb);

        return promise;
    }

    public post(
        url: string,
        data?: object,
        config?: AxiosRequestConfig,
        doneCb = (res: AxiosResponse): any => res,
        errorCb = (err: AxiosError): any => err): AxiosPromise {

        const promise: AxiosPromise = this.axios.post(url, data, config);
        promise.then(doneCb, errorCb);

        return promise;
    }
}