/**
 * Home page reducer
 */

import { createReducer } from 'reduxsauce';
import { ActionTypes } from './actions';

export const INITIAL_STATE = {
  isLoggedIn: false,
  userInfo: {},
  isAuthenticating: false,
};

export const loggedIn = (state = INITIAL_STATE, { userInfo }) => {
  return {
    ...state,
    isLoggedIn: true,
    isAuthenticating: false,
    userInfo: {
      ...userInfo
    },
  }
}

export const loggedOut = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoggedIn: false,
    userInfo: {},
    isAuthenticating: false,
  }
}

export const authenticating = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoggedIn: false,
    isAuthenticating: true,
  }
}

export const HANDLERS = {
  [ActionTypes.LOGGED_IN]: loggedIn,
  [ActionTypes.LOGGED_OUT]: loggedOut,
  [ActionTypes.AUTHENTICATING]: authenticating,
}

export default createReducer(INITIAL_STATE, HANDLERS)
