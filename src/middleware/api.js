const BASE_URL = `${process.env.ORIGIN_URI}/api/v1/`;
import fetch from 'isomorphic-fetch';

function callApi(endpoint, authenticated) {
  const token = localStorage.getItem('cs_token') || null;
  const config = {};

  if (authenticated) {
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    } else {
      throw new Error('No valid token');
    }
  }

  return fetch(BASE_URL + endpoint, config)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    }).catch(err => console.log(err));
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API];

  // So the middleware doesn't get applied to every single action
  if (callAPI === undefined) {
    return next(action);
  }

  const { endpoint, types, authenticated } = callAPI;
  const [requestType, successType, errorType] = types;

  return callApi(endpoint, authenticated).then(
    response =>
      next({
        response,
        authenticated,
        type: successType,
      }),
    error => next({
      error: error.message || 'There was an error.',
      type: errorType,
    })
  );
};
