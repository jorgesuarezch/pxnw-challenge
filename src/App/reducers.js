import { combineReducers } from 'redux';

import HomeReducer from '../containers/HomePage/reducer';
import LoginReducer from '../containers/LoginPage/reducer';
import GistReducer from '../containers/GistDetailPage/reducer';
import GistCreateReducer from '../containers/GistCreatePage/reducer';

export default combineReducers({
  Home: HomeReducer,
  Login: LoginReducer,
  Gist: GistReducer,
  GistCreate: GistCreateReducer,
});
