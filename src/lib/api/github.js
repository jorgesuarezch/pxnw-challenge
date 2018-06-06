/**
 * Here goes all requests related to github service
 * 
 * TODO: Remove sensitive data when service for getting the token is implemented
 */

import {
  doGet,
  doPost,
  doPatch,
} from "../utils/request";

/**
 * Github oauth application values
 */
export const CLIENT_ID = 'f0c1b2b6b104d94b106d';
export const SECRET_ID = '0d98adabbc4ea2304e1bba3a7265aa0fdf160047';
export const GIST_SCOPE = 'gist';


/**
* Available endpoints
*/

export const API = 'https://api.github.com';
export const AUTHORIZE_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${GIST_SCOPE}`;
export const ACCESS_TOKEN_URL = 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token';


export const requestToken = (code) => {
  return doPost(
    ACCESS_TOKEN_URL,
    {
      code,
      client_id: CLIENT_ID,
      client_secret: SECRET_ID,
    }
  );
}

export const requestUserInfo = () => {
  return doGet(`${API}/user`, {});
}


/**
 * Gets a gist with the given id
 * @param {*} id 
 */
export const getGistById = (id) => {
  return doGet(`${API}/gists/${id}`, {});
}

/**
 * Gets the gists of a user
 * @param {*} username 
 */
export const getGistsByUsername = (username) => {
  return doGet(`${API}/users/${username}/gists`, {});
}

/**
 * Creates a new gist.
 * @param {*} payload 
 */
export const createGist = (payload) => {
  return doPost(`${API}/gists`, payload);
}

/**
 * Update a gist
 * @param {*} id 
 * @param {*} payload 
 */
export const updateGist = (id, payload) => {
  return doPatch(`${API}/gists/${id}`, payload);
}
