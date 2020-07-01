import React from 'react';
import Card from './Card';
import './index.css';

import AppContext from '../../../context/app-context';

const Cards = (props) => {
  const context = React.useContext(AppContext);
  return context.cards.map((card, index) => {
  return (
    <span key={card.data.id} className="g-align">
      <Card
        key={card.data.id}
        index={index}
        data={card.data}
        disabled={props.viewMode}
        isSelected={card.isSelected}
        selectMode={props.selectMode}
        onSave={context.updateHandler}
        onCheck={context.selectHandler}/>
    </span>
  )
})
};




export default Cards;
