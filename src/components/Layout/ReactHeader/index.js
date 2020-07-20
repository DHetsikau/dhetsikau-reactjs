import React from 'react';
import logo from './logo.svg';
import './index.css'

import NavBar from './NavBar';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = props => {
  const cardsInStore = useSelector(state => state.cardsReducer.cards);
  return (
    <header className="App-header jumbotron card-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> This is <code>ReactJS</code> App.</p>
      <NavBar/>
      {props.location.pathname === '/' && <span className="badge badge-info badge-custom">{cardsInStore.length}</span>}
    </header>
  )}

export default withRouter(Header);
