import * as constants from '../constants';
import { MssAction } from '../types/custom';

export interface IncrementEnthusiasm extends MssAction {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm extends MssAction {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
    payload: null
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
    payload: null
  };
}
/*
created two types that describe what increment actions and decrement actions should look like.
We also created a type (EnthusiasmAction) to describe cases where an action could be an increment or a decrement.
Finally, we made two functions that actually manufacture the actions which we can use instead of writing out bulky object literals.
 */
