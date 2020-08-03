import React from 'react';
import './index.css'
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const user = useSelector(state => state.authReducer.currentUser);
  const isSigned = user ? true : false;

  return (
      <nav className="NavBar">
        <ul>
            <NavLink to='/' exact>Home</NavLink>
            {isSigned ? 
              <NavLink to={{pathname: '/signout'}}>Sign out</NavLink> :
              <NavLink to={{pathname: '/signin'}}>Sign in</NavLink>}
            {(user && user.roles.includes('ADM')) ?
              <NavLink to={{pathname: '/settings'}}>Settings</NavLink> : null }
        </ul>
      </nav>
  )
};

export default NavBar;
