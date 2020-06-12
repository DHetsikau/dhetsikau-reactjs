import React from 'react';

import ViewOnlyPanel from './ViewOnlyPanel/ViewOnlyPanel';
import SelectModePanel from './SelectModePanel/SelectModePanel';

import AppContext from '../../../context/app-context';

import './Cockpit.css';

const Cockpit = (props) => {
  const context = React.useContext(AppContext);
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
        onDeleteCards={context.deleteHandler}
        onAddCards={context.addHandler}
      />
    </div>
  )};

export default Cockpit;
