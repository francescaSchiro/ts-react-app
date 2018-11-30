import storage from 'redux-persist/lib/storage';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import { rootTransform } from 'app/common/transforms';


export const config = {
  key: 'root',
  storage,
  transforms: [
    // createWhitelistFilter('app', ['messages', 'currentMessage']),
    // rootTransform,
  ],
};
