import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import LogoutButton from './LogoutButton';


const Navbar = props => {
  const { user, logout } = props;

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
          {!user.isLoggedIn &&
            <NavLink to="/login">Login</NavLink>
          }
          {user.isLoggedIn &&
            <LogoutButton logout={logout}>Logout</LogoutButton>
          }
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default Navbar;
