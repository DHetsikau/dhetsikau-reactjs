import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  viewMode: false,
  selectMode: false,
};

const toggleViewOnlyModeCheck = (state) => {
  return updateObject(state, {viewMode: !state.viewMode, selectMode: false});
};

const toggleMgmtModeCheck = (state) => {
  return updateObject(state, {selectMode: !state.selectMode});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_VIEW_ONLY_MODE_CHECK : return toggleViewOnlyModeCheck(state); 
    case actionTypes.TOGGLE_MGMT_MODE_CHECK : return toggleMgmtModeCheck(state);
    default: return state;
  } 
};

export default reducer;
