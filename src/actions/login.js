import fetch from 'isomorphic-fetch';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(token) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isLoggedIn: false,
    token,
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isLoggedIn: true,
    user,
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isLoggedIn: false,
    message,
  };
}

export function loginUser(token) {
  const config = {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  };

  return dispatch => {
    dispatch(requestLogin(token))

    return fetch(`${process.env.ORIGIN_URI}/api/v1/challenge`, config)
      .then(response =>
        response.json().then(user => ({ user, response }))
      ).then(({ user, response }) => {
        console.log('response', response);
        console.log('user', user);
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          // If login was successful, set the token in local storage
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}
