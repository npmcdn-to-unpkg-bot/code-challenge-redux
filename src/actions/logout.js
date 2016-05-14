export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export function logoutUser() {
  console.log('SENDING LOGOUT_SUCCESS ACTION');
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isLoggedIn: false,
  };
}
