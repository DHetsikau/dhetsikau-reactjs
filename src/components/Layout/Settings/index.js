import React from 'react';

import ViewOnlyPanel from './ViewOnlyPanel';
import { useDispatch, useSelector } from 'react-redux';
import { toggleViewOnlyModeCheck } from '../../../store/actions/modeActions';

const Settings = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector(state => state.modeReducer.viewMode);
  return (
    <ViewOnlyPanel
      viewMode={viewMode}
      switchViewMode={() => {dispatch(toggleViewOnlyModeCheck())}}/>
  )
};

export default Settings;
