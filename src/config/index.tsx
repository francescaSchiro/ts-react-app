import { merge } from 'lodash';
import common from './env_common';
import env from './env';

export default merge({}, common, env[common.ENV]);