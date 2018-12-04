import { merge } from 'lodash';
import common from './env_common';
import env from './env';

export const ENV = merge({}, common, env[common.ENV]);
export const REQUEST_TIMEOUT = 15000;
export const REQUEST_HEADERS_ACCEPT = 'application/json';
export const REQUEST_HEADERS_CONTENTTYPE = 'application/json';