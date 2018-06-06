/**
 * Actions creators
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loggedIn: ['userInfo'],
  loggedOut: null,
  authenticating: null,
  getUserInfo: null,
  authenticate: ['code'],
});

export const ActionTypes = Types;

export default Creators;
