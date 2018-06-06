/**
 * Actions creators
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  createGist: ['payload'],
  creatingGist: null,
  gistCreated: ['gist'],
});

export const ActionTypes = Types;

export default Creators;
