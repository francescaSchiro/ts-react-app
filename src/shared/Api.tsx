import { get } from './httpClient';

function getBaseData(): Promise<any> {
  const endpoint = 'getBaseData';
  return get(endpoint);
}

export {
  getBaseData
}