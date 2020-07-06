import React from 'react';
import Poke from './NotFound.svg';

import './index.css';

const NotFound = () =>
  <React.Fragment>
    <img src={Poke} className="NotFound" alt="Poke"></img>
    <h1 className="ta-c">PAGE NOT FOUND</h1>
  </React.Fragment>

export default NotFound;
