import * as actionTypes from './actionTypes';

export const toggleViewOnlyModeCheck = () => {
  return {
    type: actionTypes.TOGGLE_VIEW_ONLY_MODE_CHECK,
  }
};

export const toggleMgmtModeCheck = () => {
  return {
    type: actionTypes.TOGGLE_MGMT_MODE_CHECK,
  }
};
