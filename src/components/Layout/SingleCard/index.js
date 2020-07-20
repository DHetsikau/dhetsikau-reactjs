import React from 'react';

import { connect } from 'react-redux';
import Card from '../CardList/Card';
import * as cardActions from '../../../store/actions/cardActions';
import './index.css';

const SingleCard = (props) => {
  
  const card = props.cards.length ? props.cards.filter(
    (c) => c.data.id === props.match.params.id,
  )[0] : undefined;
  
  return card ? (
      <span key={card.data.id}>
        <Card
          key={card.data.id}
          id={card.data.id}
          data={card.data}
          disabled={props.viewMode}
          isSelected={card.isSelected}
          selectMode={props.selectMode}
          onSave={props.updateCard}
          onCheck={props.selectCard}
          displayedAs="single"/>
      </span>
  ) : <h1 className="singleCard">CARD NOT FOUND</h1>
};

const mapStateToProps = state => {
  return {
    cards: state.cardsReducer.cards,
    loading: state.cardsReducer.loading,
  }
}

const mapDispatchToProps = {
  fetchCards: cardActions.fetchCards,
  updateCard: cardActions.updateCard,
  selectCard: cardActions.selectCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
