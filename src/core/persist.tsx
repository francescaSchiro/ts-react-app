import storage from 'redux-persist/lib/storage';
import createEncryptor from 'redux-persist-transform-encrypt';
import { PersistConfig, createTransform } from 'redux-persist';
import { LanguageProviderState } from 'src/containers/LanguageProvider/reducer';
import { AppState } from 'src/containers/App/reducer';
import { UserState } from 'src/shared/User/reducer';

type CommonPersistState = AppState | LanguageProviderState;
type ProtectedPersistState = UserState;

const WHITELIST_COMMON: string[] = ['language', 'router'];
const BLACKLIST_COMMON: string[] = ['user'];

const encryptor = createEncryptor<ProtectedPersistState, any>({
  secretKey: 'zQkwu4d^C:ShJPRb',
  onError(error) {
    // tslint:disable-next-line:no-console
    console.log(`${error.name}: ${error.message}`);
  }
});

const userTransform = createTransform<ProtectedPersistState, any>(
  // Inbound state
  (state: any) => state,
  // Outbound state
  (state, key: string) => {
    switch (key) {
      default:
        return state;
    }
  }
);

const rootTransform = createTransform<CommonPersistState, any>(
  // Inbound state
  (state: any) => state,
  // Outbound state
  (state, key: string) => {
    switch (key) {
      case 'router':
        return state; // TODO
      case 'language':
        const locale = state.locale;
        return {
          ...state,
          locale
        }
      default:
        return state;
    }
  },
  // CONFIG
  { whitelist: WHITELIST_COMMON },
);

export const protectedPersistConfig: PersistConfig = {
  key: 'user',
  storage,
  transforms: [
    userTransform,
    encryptor
  ]
};

export const commonPersistConfig: PersistConfig = {
  key: 'root',
  storage,
  whitelist: WHITELIST_COMMON,
  blacklist: BLACKLIST_COMMON,
  transforms: [
    rootTransform
  ]
};
