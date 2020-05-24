import React from 'react';
import Card from './Card/Card';
import './CardList.css';

const cards = (props) => props.cards.map((card, index) => {
  return (
    <span className="g-align">
      <Card
        key={card.data.id}
        index={index}
        data={card.data}
        onsave={props.saved}
        disabled={props.viewMode}
        isSelected={props.selectedCards.includes(card.data.id)}
        selectMode={props.selectMode}
        selectCard={props.selectCard}
        unselectCard={props.unselectCard}/>
    </span>
  )
});

export default cards;