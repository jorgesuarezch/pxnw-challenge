/**
 * Actions creators
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadingGist: null,
  loadGist: ['id'],
  updateGist: ['id', 'payload'],
  gistLoaded: ['gist'],
  updatingGist: ['active'],
});

export const ActionTypes = Types;

export default Creators;
