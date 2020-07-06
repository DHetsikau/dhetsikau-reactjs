import React from 'react';
import './App.css';

import Layout from '../components/Layout';
import { AppContextProvider } from '../context/app-context';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App card border-secondary mb-3">
      <BrowserRouter>
        <AppContextProvider>
          <Layout />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
