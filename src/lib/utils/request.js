/**
 * Ajax utils
 */

import axios from 'axios';
import { getAccesToken } from './index';

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const token = getAccesToken();

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  return headers;
}

export const doGet = (url, params) => {
  return axios
    .get(url, {
      headers: getHeaders(),
      params
    })
    .then(response => response.data);
}

export const doPost = (url, payload) => {
  return axios.post(
    url,
    payload,
    {
      headers: getHeaders(),
    }
  ).then(response => response.data);
}


export const doPatch = (url, payload) => {
  return axios.patch(
    url,
    payload,
    {
      headers: getHeaders(),
    }
  ).then(response => response.data);
}
