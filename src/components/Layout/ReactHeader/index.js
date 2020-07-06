import React from 'react';
import logo from './logo.svg';
import './index.css'

import AppContext from '../../../context/app-context';
import NavBar from './NavBar';
import { withRouter } from 'react-router-dom';

const Header = props => {
  const context = React.useContext(AppContext);
  return (
    <header className="App-header jumbotron card-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> This is <code>ReactJS</code> App.</p>
      <NavBar/>
      {props.location.pathname === '/' && <span className="badge badge-info badge-custom">{context.getCardsCount()}</span>}
    </header>
  )}

export default withRouter(Header);
