/**
 * Actions creators
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadGists: ['username'],
  gistsLoaded: ['gists'],
  loading: null,
});

export const ActionTypes = Types;

export default Creators;
