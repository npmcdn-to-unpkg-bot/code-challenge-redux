import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          In order to start the challenges, please sign in through GitHub.
          We'll roll out more authentication options in the future.
        </p>
        <a href={process.env.DYNAMO_URI}>Sign in through GitHub</a>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { user } = state;
  return Object.assign({}, props, { user });
}

export default connect(mapStateToProps)(Login);
