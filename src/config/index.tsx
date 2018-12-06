import { merge } from 'lodash';

import ENV_COMMON_ from './env_common';
import ENV_ from './env';

import REQUEST_COMMON_ from './request_common';

export const ENV = merge({}, ENV_COMMON_, ENV_[ENV_COMMON_.ENV]);
export const REQUEST = merge({}, REQUEST_COMMON_);