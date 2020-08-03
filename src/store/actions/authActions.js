import * as actionTypes from './actionTypes';
import fakeAuthAxios from './../fakeAuthAxios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};


export const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: data.token,
    userId: data.user,
    roles: data.roles,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  ['token','user','roles'].forEach(it => {
    localStorage.removeItem(it);
  });
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (authData) => {
  return dispatch => {
    fakeAuthAxios(authData)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', response.data.user);
        localStorage.setItem('roles', response.data.roles);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error.message));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const roles = localStorage.getItem('roles');
    (token && user) ? dispatch(authSuccess({user, token, roles,})) : dispatch(logout()); 
  };
};
