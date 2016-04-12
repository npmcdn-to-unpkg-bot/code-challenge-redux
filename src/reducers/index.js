// import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../actions';
import { SELECT_CHALLENGE } from '../actions';
import * as challenges from '../constants/challenges';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

export default function user(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function challenge(state = '01Functions', action) {
  switch (action.type) {
    case SELECT_CHALLENGE:
      if (action.challenge in challenges) {
        return action.challenge;
      }
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  challenge,
  routing,
});

export default rootReducer;
