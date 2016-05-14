import React, { PropTypes } from 'react';

const LogoutButton = props => (
  <a style={{ cursor: 'pointer' }} onClick={props.logout}>Logout</a>
);

LogoutButton.propTypes = {
  logout: PropTypes.func,
};

export default LogoutButton;
