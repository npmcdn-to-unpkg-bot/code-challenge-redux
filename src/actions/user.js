export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export function fetchUser(user) {
  return {
    type: USER_REQUEST,
    user,
  };
}
