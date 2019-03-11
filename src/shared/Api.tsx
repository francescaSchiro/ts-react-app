import { get } from './HttpClient';

function getBaseData(): Promise<any> {
  const endpoint = 'getBaseData';
  return get(endpoint);
}

export {
  getBaseData
}