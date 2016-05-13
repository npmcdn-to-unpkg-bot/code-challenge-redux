import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, user } = this.props;

    return (
      <div>
        <Navbar user={user} />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
};

function mapStateToProps(state, props) {
  const { user } = state;
  return Object.assign({}, props, { user });
}

export default connect(mapStateToProps)(App);
