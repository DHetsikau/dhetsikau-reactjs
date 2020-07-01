import React from 'react';
import './App.css';

import Layout from '../components/Layout';
import { AppContextProvider } from '../context/app-context';

function App() {
  return (
    <div className="App card border-secondary mb-3">
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </div>
  );
}

export default App;
