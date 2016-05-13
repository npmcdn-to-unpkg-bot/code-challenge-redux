import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button>Sign in through GitHub</button>
    );
  }
}

function mapStateToProps(state, props) {
  const { user } = state;
  return Object.assign({}, props, { user });
}

export default connect(mapStateToProps)(Login);
