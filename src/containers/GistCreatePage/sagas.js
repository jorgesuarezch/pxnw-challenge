/**
 * Sagas
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import Actions, { ActionTypes } from './actions';
import { createGist } from '../../lib/api/github';

/**
 * Fetch the access token using the given code
 * 
 * @param {Object} param0 
 */
export function* createGistHandler({ payload }) {
  try {
    yield put(Actions.creatingGist());
    const response = yield call(createGist, payload);
    yield put(Actions.gistCreated(response));
  } catch (error) {
    console.error(error);
  }
}

export default [
  takeLatest(ActionTypes.CREATE_GIST, createGistHandler),
];
