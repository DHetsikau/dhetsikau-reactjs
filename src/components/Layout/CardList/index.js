import React from 'react';
import Card from './Card';
import './index.css';

import { useSelector } from 'react-redux';

const CardList = props => {
  const cardsInStore = useSelector(state => state.cardsReducer.cards);
  const loadingInStore = useSelector(state => state.cardsReducer.loading);

  return !loadingInStore && cardsInStore.length > 0 && cardsInStore.map((card, index) => {
  return (
    <span key={card.data.id} className="g-align">
      <Card
        key={card.data.id}
        id={card.data.id}
        index={index}
        data={card.data}
        disabled={props.viewMode}
        isSelected={card.isSelected}
        selectMode={props.selectMode}
        displayedAs="group"/>
    </span>
  )
})
};

export default CardList;
