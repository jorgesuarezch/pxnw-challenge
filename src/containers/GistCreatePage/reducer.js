/**
 * Gist Create Page reducer
 */

import { createReducer } from 'reduxsauce';
import { ActionTypes } from './actions';

export const INITIAL_STATE = {
  creatingGist: false,
  gist: {},
};

export const setGist = (state = INITIAL_STATE, { gist }) => {
  return {
    ...state,
    gist,
  }
}

export const creating = (state = INITIAL_STATE) => {
  return {
    ...state,
    creatingGist: true,
  }
}

export const HANDLERS = {
  [ActionTypes.CREATING_GIST]: creating,
  [ActionTypes.GIST_CREATED]: setGist,
}

export default createReducer(INITIAL_STATE, HANDLERS)
