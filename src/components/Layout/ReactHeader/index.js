import React from 'react';
import logo from './logo.svg';
import './index.css'

import NavBar from './NavBar';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <header className="App-header jumbotron card-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> This is <code>ReactJS</code> App.</p>
      <NavBar/>
      {props.location.pathname === '/' && <span className="badge badge-info badge-custom">{props.cards.length}</span>}
    </header>
  )}

const mapStateToProps = state => {
  return {
    cards: state.cardsReducer.cards, 
  }
}

export default connect(mapStateToProps)(withRouter(Header));
