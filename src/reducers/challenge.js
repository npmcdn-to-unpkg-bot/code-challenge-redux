import { SELECT_CHALLENGE } from '../actions/challenge';
import { START_TEST, PASS_TEST, FAIL_TEST } from '../actions/test';
import * as challenges from '../constants/challenges';

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
