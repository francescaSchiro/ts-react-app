import { Action } from 'redux';

export interface WithId extends Object {
  id: string | number;
}

// Msite Action object structure convention
export interface MssAction extends Action {
  payload: any;
}