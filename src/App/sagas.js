import { all } from 'redux-saga/effects'

import LoginPageSagas from '../containers/LoginPage/sagas';
import HomePageSagas from '../containers/HomePage/sagas';
import GistDetailPageSagas from '../containers/GistDetailPage/sagas';
import GistCreatePageSagas from '../containers/GistCreatePage/sagas';

export default function* sagas() {
  yield all([
    ...LoginPageSagas,
    ...HomePageSagas,
    ...GistDetailPageSagas,
    ...GistCreatePageSagas,
  ]);
}
