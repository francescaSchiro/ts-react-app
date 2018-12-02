import { Action } from 'redux';

export interface WithId extends Object {
  id: string | number;
}

// Msite Action object structure convention
export interface MssAction<T = any> extends Action {
  type: T;
  payload: any;
}