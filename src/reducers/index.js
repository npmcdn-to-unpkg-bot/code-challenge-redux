// import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../actions';
import {
  SELECT_CHALLENGE, START_TEST,
  PASS_TEST, FAIL_TEST,
} from '../actions';
import * as challenges from '../constants/challenges';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const defaultUserState = {
  isLoggedIn: false,
};

export default function user(state = defaultUserState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const defaultChallengeState = {
  pass: false,
  isExecuting: false,
  err: undefined,
};

export default function challenge(state = defaultChallengeState, action) {
  switch (action.type) {
    case SELECT_CHALLENGE:
      if (action.challenge in challenges) {
        return action.challenge;
      }
      return state;
    case START_TEST:
      return Object.assign({}, state, {
        pass: false,
        isExecuting: true,
        err: undefined,
      });
    case PASS_TEST:
      return Object.assign({}, state, {
        pass: true,
        isExecuting: false,
        err: undefined,
      });
    case FAIL_TEST:
      return Object.assign({}, state, {
        pass: false,
        isExecuting: false,
        err: action.err,
      });
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
