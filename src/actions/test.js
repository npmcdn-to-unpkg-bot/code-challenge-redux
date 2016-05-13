import testInWebWorker from '../util/worker/testInWebWorker';

export const START_TEST = 'START_TEST';
export const PASS_TEST = 'PASS_TEST';
export const FAIL_TEST = 'FAIL_TEST';

function startTest() {
  return {
    type: START_TEST,
  };
}

function passTest() {
  return {
    type: PASS_TEST,
  };
}

function failTest(err) {
  return {
    type: FAIL_TEST,
    err,
  };
}

function testCode(code, tests) {
  return dispatch => {
    dispatch(startTest());
    return testInWebWorker(code, tests, (result) => {
      if (result.err) {
        dispatch(failTest(result.err));
      } else {
        dispatch(passTest());
      }
    });
  };
}

function shouldTestCode(state) {
  return !state.challenge.isTesting;
}

export function testCodeIfNeeded(code, tests) {
  return (dispatch, getState) => {
    if (shouldTestCode(getState())) {
      return dispatch(testCode(code, tests));
    }
  };
}
