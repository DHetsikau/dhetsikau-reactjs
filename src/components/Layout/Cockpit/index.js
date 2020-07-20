import React from 'react';

import ViewOnlyPanel from './ViewOnlyPanel';
import SelectModePanel from './SelectModePanel';

import './index.css';

const Cockpit = props => {
  return (
    <div>
      <ViewOnlyPanel
        viewMode={props.viewMode}
        selectMode={props.selectMode}
        switchViewMode={props.switchViewMode} />
      <SelectModePanel
        viewMode={props.viewMode}
        selectMode={props.selectMode}
        switchSelectMode={props.switchSelectMode}
      />
    </div>
  )};

export default Cockpit;
