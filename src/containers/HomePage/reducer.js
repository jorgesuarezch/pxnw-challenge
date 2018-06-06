/**
 * Home page reducer
 */

import { createReducer } from 'reduxsauce';
import { ActionTypes } from './actions';

export const INITIAL_STATE = {
  error: false,
  loading: false,
  gists: [],
};

export const gistsLoaded = (state = INITIAL_STATE, { gists }) => {
  return {
    ...state,
    error: false,
    loading: false,
    gists,
  }
}

export const loading = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: true,
  }
}

export const HANDLERS = {
  [ActionTypes.GISTS_LOADED]: gistsLoaded,
  [ActionTypes.LOADING]: loading,
}

export default createReducer(INITIAL_STATE, HANDLERS)
