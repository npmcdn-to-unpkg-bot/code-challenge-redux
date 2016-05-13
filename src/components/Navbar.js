import React, { PropTypes } from 'react';
import NavLink from './NavLink';
import { Link } from 'react-router';

const Navbar = props => {
  const { isLoggedIn } = props.user;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/challenge">Challenge</NavLink>
        </li>
        <li>
          {isLoggedIn &&
            <a href={process.env.DYNAMO_URI}>Logout</a>
          }
          {!isLoggedIn &&
            <NavLink to="/login">Login</NavLink>
          }
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
};

export default Navbar;
