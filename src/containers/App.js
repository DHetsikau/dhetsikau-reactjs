import React, {useEffect} from 'react';
import './App.css';

import Layout from '../components/Layout';
import {BrowserRouter} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../store/actions/cardActions';
import { authCheckState } from '../store/actions/authActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="App card border-secondary mb-3">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
