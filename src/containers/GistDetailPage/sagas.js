/**
 * Sagas
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import Actions, { ActionTypes } from './actions';
import { getGistById, updateGist } from '../../lib/api/github';

/**
 * Load a gist
 * 
 * @param {Object} param0 
 */
export function* loadGistHandler({ id }) {
  try {
    yield put(Actions.loadingGist());
    const response = yield call(getGistById, id);
    yield put(Actions.gistLoaded(response));
  } catch (error) {
    console.error(error);
  }
}

/**
 * Update a gist
 */
export function* updateGistHandler({ id, payload }) {
  try {
    yield put(Actions.updatingGist(true));
    const response = yield call(updateGist, id, payload);
    yield put(Actions.gistLoaded(response));
    yield put(Actions.updatingGist(false));
  } catch (error) {
    console.error(error);
  }
}

export default [
  takeLatest(ActionTypes.LOAD_GIST, loadGistHandler),
  takeLatest(ActionTypes.UPDATE_GIST, updateGistHandler),
];
