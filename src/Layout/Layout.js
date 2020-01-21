import React from 'react';
import logo from './logo.svg';
import './Layout.css';

import Card from '../Card/Card';

function Layout() {
    return (
        <div>
          <header className="App-header jumbotron card-header">
             <img src={logo} className="App-logo" alt="logo" />
             <p> This is <code>ReactJS</code> App.</p>
          </header>
          <div>
            <Card />
          </div>  
        </div>
    )
}

export default Layout;