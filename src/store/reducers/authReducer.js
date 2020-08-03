import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  currentUser: undefined,
  error: null,
  loading: false,
  authRedirectPath: '/', 
};

const authStart = (state) => {
  return updateObject(state, {
    error: null, 
    loading: true,
  });
};

const authSuccess = (state, action) => {
  const currentUser = updateObject(state.currentUser, {
    token: action.token,
    userId: action.userId,
    roles: action.roles,
  });
  return updateObject(state, {
    currentUser,
    error: null, 
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state) => {
  return updateObject(state, { 
    currentUser: undefined,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state);
    default: return state;
  }
};

export default reducer;
