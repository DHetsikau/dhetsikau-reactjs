import React from 'react';

import ViewOnlyPanel from './ViewOnlyPanel';
import SelectModePanel from './SelectModePanel';

import {connect} from 'react-redux';
import * as cardActions from '../../../store/actions/cardActions';

import './index.css';

const Cockpit = (props) => {
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
        onDeleteCards={props.removeCard}
        onAddCards={props.createCard}
      />
    </div>
  )};

const mapDispatchToProps = {
  removeCard: cardActions.removeCard,
  createCard: cardActions.createCard
}

export default connect(null, mapDispatchToProps)(Cockpit);
