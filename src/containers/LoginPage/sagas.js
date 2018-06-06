/**
 * sagas
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import Actions, { ActionTypes } from './actions';
import { requestToken, requestUserInfo } from '../../lib/api/github';
import { saveAccesToken } from '../../lib/utils';

/**
 * Fetch the access token using the given code
 * 
 * @param {Object} param0 
 */
export function* getAccessTokenHandler({ code }) {
  try {
    yield put(Actions.authenticating());
    const response = yield call(requestToken, code);
    const token = response.access_token;
    saveAccesToken(token);
    yield put(Actions.getUserInfo());
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetch the information related to the user.
 * @param {*} param0 
 */
export function* getUserInfoHandler({ code }) {
  try {
    const userInfo = yield call(requestUserInfo);
    yield put(Actions.loggedIn(userInfo));
  } catch (error) {
    console.error(error);
  }
}

export default [
  takeLatest(ActionTypes.AUTHENTICATE, getAccessTokenHandler),
  takeLatest(ActionTypes.GET_USER_INFO, getUserInfoHandler),
];
