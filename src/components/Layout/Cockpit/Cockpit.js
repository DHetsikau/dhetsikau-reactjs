import React from 'react';

import ViewOnlyPanel from './ViewOnlyPanel/ViewOnlyPanel';
import SelectModePanel from './SelectModePanel/SelectModePanel';

import './Cockpit.css';

const cockpit = (props) => {
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
        onDeleteCards={props.onDeleteCards}
      />
    </div>
  )};

export default cockpit;
