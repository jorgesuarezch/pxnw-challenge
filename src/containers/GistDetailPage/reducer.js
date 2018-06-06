/**
 * Home page reducer
 */

import { createReducer } from 'reduxsauce';
import { ActionTypes } from './actions';

export const INITIAL_STATE = {
  updatingGist: false,
  loading: false,
  gist: {
    files: {}
  },
};

export const gistLoaded = (state = INITIAL_STATE, { gist }) => {
  return {
    ...state,
    loading: false,
    gist,
  }
}

export const loadingGist = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: true,
    updatingGist: false,
  }
}

export const updatingGist = (state = INITIAL_STATE, { active }) => {
  return {
    ...state,
    updatingGist: active,
  }
}

export const HANDLERS = {
  [ActionTypes.GIST_LOADED]: gistLoaded,
  [ActionTypes.LOADING_GIST]: loadingGist,
  [ActionTypes.UPDATING_GIST]: updatingGist,
}

export default createReducer(INITIAL_STATE, HANDLERS)
