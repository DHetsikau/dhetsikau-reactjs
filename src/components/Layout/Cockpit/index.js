import React from 'react';

import SelectModePanel from './SelectModePanel';

import './index.css';

const Cockpit = props => {
    
  return (
    <div>
      { !props.viewMode ? <SelectModePanel
        viewMode={props.viewMode}
        selectMode={props.selectMode}
        switchSelectMode={props.switchSelectMode}
      /> : null}
    </div>
  )};

export default Cockpit;
