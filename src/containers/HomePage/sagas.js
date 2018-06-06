/**
 * Home Page sagas
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import Actions, { ActionTypes } from './actions';
import { getGistsByUsername } from '../../lib/api/github';


/**
 * Flow related to get all gists of a user
 * 
 * @param {Object} param0 
 */
export function* loadGistsHandler({ username }) {
  try {
    yield put(Actions.loading());
    const response = yield call(getGistsByUsername, username);

    yield put(Actions.gistsLoaded(response));
  } catch (error) {
    console.error(error);
  }
}

export default [
  takeLatest(ActionTypes.LOAD_GISTS, loadGistsHandler),
];
