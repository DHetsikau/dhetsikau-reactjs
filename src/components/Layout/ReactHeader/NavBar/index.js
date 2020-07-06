import React from 'react';
import './index.css'

import {NavLink} from 'react-router-dom';

const NavBar = props => {
  return (
      <nav className="NavBar">
        <ul>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to={{pathname: '/signin'}}>Sign in</NavLink>
        </ul>
      </nav>
  )
}

export default NavBar;