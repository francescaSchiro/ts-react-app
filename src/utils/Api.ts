import { map } from 'lodash';
import { Message } from 'src/models';
import HttpClient from './HttpClient';

export default class Api {

    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public fetchMessages(): Promise<Message[]> {
        const url: string = '';
        return this.httpClient.get(url)
            .then(items => map(items, item => {
                return new Message(item);
            }));
    }
}