import React, {useEffect} from 'react';
import './App.css';

import Layout from '../components/Layout';
import { connect } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import * as cardActions from '../store/actions/cardActions';

const App = props => {
  const {fetchCards} = props;

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <div className="App card border-secondary mb-3">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cardsReducer.cards,
    loading: state.cardsReducer.loading,
  }
}

const mapDispatchToProps = {
  fetchCards: cardActions.fetchCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
