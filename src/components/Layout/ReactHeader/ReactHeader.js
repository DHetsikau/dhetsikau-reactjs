import React from 'react';
import logo from './logo.svg';
import './ReactHeader.css'

import AppContext from '../../../context/app-context';

const Header = () => {
  const context = React.useContext(AppContext);  
  return (
    <header className="App-header jumbotron card-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> This is <code>ReactJS</code> App.</p>
      <span class="badge badge-info badge-custom">{context.getCardsCount()}</span>
    </header>
  )}

export default Header;
