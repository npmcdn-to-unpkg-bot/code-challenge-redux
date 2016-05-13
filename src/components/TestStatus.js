import React, { PropTypes } from 'react';
// import { browserHistory } from 'react-router';

const TestStatus = (props) => {
  const color = props.pass ? 'green' : 'red';
  let message;
  if (props.isExecuting) {
    message = 'Executing code...';
  } else if (props.err) {
    message = props.err.message;
  } else if (props.pass) {
    message = 'Success!';
  } else {
    message = 'Complete the challenge, then click submit';
  }

  return (
    <div style={{ color }}>
      {message}
    </div>
  );
};

TestStatus.propTypes = {
  pass: PropTypes.bool,
  err: PropTypes.objectOf(PropTypes.string),
  isExecuting: PropTypes.bool,
};

export default TestStatus;
