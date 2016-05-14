import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login';
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actions/logout';

const defaultUserState = {
  isLoggedIn: false,
};

export default function user(state = defaultUserState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isLoggedIn: action.isLoggedIn,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isLoggedIn: action.isLoggedIn,
        message: action.message,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isLoggedIn: action.isLoggedIn,
      }, action.user);
    case LOGOUT_SUCCESS:
      const newState = Object.assign({}, state, {
        isFetching: action.isFetching,
        isLoggedIn: action.isLoggedIn,
      });
      console.log('LOGGING OUT', newState);
      return newState;
    default:
      return state;
  }
}
