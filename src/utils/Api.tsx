// import { map } from 'lodash';
// import { Message } from 'src/models';
import HttpClient from './HttpClient';

export default class Api {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getBaseData(): Promise<any> {
    const endpoint = 'getBaseData';
    return this.httpClient.get(endpoint);
  }
}
