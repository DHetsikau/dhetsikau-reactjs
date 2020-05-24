import React from 'react';
import logo from './logo.svg';
import './ReactHeader.css'

const header = () =>
  <header className="App-header jumbotron card-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p> This is <code>ReactJS</code> App.</p>
  </header>

export default header;