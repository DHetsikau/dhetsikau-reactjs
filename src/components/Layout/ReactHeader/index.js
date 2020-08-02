import React from 'react';
import logo from './logo.svg';
import './index.css'

import NavBar from './NavBar';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = props => {
  const cardsInStore = useSelector(state => state.cardsReducer.cards);
  const user = useSelector(state => state.authReducer.currentUser);
  
  const greetings = user ? <p> Greetings, <code>{user.userId}</code>!</p> : <p> This is <code>ReactJS</code> App.</p>;

  return (
    <header className="App-header jumbotron card-header">
      <img src={logo} className="App-logo" alt="logo" />
      {greetings}
      <NavBar/>
      {props.location.pathname === '/' && <span className="badge badge-info badge-custom">{cardsInStore.length}</span>}
    </header>
  )};

export default withRouter(Header);
