import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Navbar = props => {
  console.log(props);
  const auth = props.user.isLoggedIn ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>;
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/challenge">Challenge</Link>
      </li>
      <li>
        {auth}
      </li>
    </ul>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
};

export default Navbar;
