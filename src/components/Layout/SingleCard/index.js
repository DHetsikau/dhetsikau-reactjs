import React from 'react';

import { useSelector } from 'react-redux';
import Card from '../CardList/Card';

import './index.css';

const SingleCard = props => {
  
  const cardsInStore = useSelector(state => state.cardsReducer.cards);
  const card = cardsInStore.find((c) => c.data.id === props.match.params.id);
  const viewMode = useSelector(state => state.modeReducer.viewMode);
  const selectMode = useSelector(state => state.modeReducer.selectMode);
  
  return card ? (
      <span key={card.data.id}>
        <Card
          key={card.data.id}
          id={card.data.id}
          data={card.data}
          disabled={viewMode}
          isSelected={card.isSelected}
          selectMode={selectMode}
          displayedAs="single"/>
      </span>
  ) : <h1 className="singleCard">CARD NOT FOUND</h1>
};

export default SingleCard;
