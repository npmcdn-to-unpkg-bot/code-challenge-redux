import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { loginUser } from '../actions/login';
import { logoutUser } from '../actions/logout';

class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const token = localStorage.getItem('cs-token');
    if (token) {
      dispatch(loginUser(token));
    }
  }

  logout() {
    const { dispatch } = this.props;
    const { router } = this.context;
    localStorage.removeItem('cs-token');
    dispatch(logoutUser());
    router.push('/');
  }

  render() {
    const { children, user } = this.props;

    return (
      <div>
        <Navbar user={user} logout={this.logout} />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  dispatch: PropTypes.func,
};

App.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state, props) {
  const { user } = state;
  return Object.assign({}, props, { user });
}

export default connect(mapStateToProps)(App);
