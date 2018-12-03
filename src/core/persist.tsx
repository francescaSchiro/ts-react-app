import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
// import { rootTransform } from 'app/common/transforms';


export const config: PersistConfig = {
  key: 'root',
  storage,
  transforms: [
    // createWhitelistFilter('app', ['messages', 'currentMessage']),
    // rootTransform,
  ],
};
