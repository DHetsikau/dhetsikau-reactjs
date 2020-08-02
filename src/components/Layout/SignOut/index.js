import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../../../store/actions/authActions';

const SignOut = () => {
  const dispatch = useDispatch();
  const authRedirectPath = useSelector(state => state.authReducer.authRedirectPath);

  React.useEffect(()=> {
    dispatch(authActions.logout());
  },[dispatch]);

  return <Redirect to={authRedirectPath} push={true} />
};

export default SignOut;
