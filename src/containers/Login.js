import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/login';

const POPUP_OPTIONS =
  `height=600, width=800, left=${(outerWidth - 800) / 2}, top=${(outerHeight - 600) / 2.5}`;

class Login extends Component {
  constructor(props) {
    super(props);
    this._login = this._login.bind(this);
  }

  _login() {
    const { dispatch } = this.props;
    const child = window.open(
      `${process.env.AUTH_URI}/auth/github?origin=${process.env.ORIGIN_URI}`,
      '',
      POPUP_OPTIONS
    );
    window.addEventListener('message', e => {
      if (e.origin === process.env.AUTH_URI) {
        dispatch(loginUser(e.data));
      }
      child.close();
    }, false);
  }

  render() {
    return (
      <div>
        <p>
          In order to start the challenges, please sign in through GitHub.
          We'll roll out more authentication options in the future.
        </p>
        <button onClick={this._login}>Login with GitHub</button>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { user } = state;
  return Object.assign({}, props, { user });
}

export default connect(mapStateToProps)(Login);
