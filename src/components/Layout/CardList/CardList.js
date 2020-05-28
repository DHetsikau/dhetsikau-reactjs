import React from 'react';
import Card from './Card/Card';
import './CardList.css';

const cards = (props) => props.cards.map((card, index) => {
  return (
    <span key={index} className="g-align">
      <Card
        key={card.data.id}
        index={index}
        data={card.data}
        onSave={props.onSaveCard}
        disabled={props.viewMode}
        isSelected={card.isSelected}
        selectMode={props.selectMode}
        onCheck={props.onCheckCard}/>
    </span>
  )
});

export default cards;
