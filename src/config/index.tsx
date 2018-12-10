import { merge } from 'lodash';

import ENV_COMMON_ from './env_common';
import ENV_ from './env';

import REQUEST_COMMON_ from './request_common';

export const ENV = merge({}, ENV_COMMON_, ENV_[ENV_COMMON_.ENV]);
export const REQUEST = merge({}, REQUEST_COMMON_);
export const MOUNT_NODE_ID = 'root';
export const DEFAULT_LOCALE = 'it';
export const APP_LOCALES = [
    'it'
];