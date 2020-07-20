import React from 'react';
import Card from './Card';
import './index.css';

import {connect} from 'react-redux';
import * as cardActions from '../../../store/actions/cardActions';

const CardList = props => {
  return !props.loading && props.cards.length > 0 && props.cards.map((card, index) => {
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
        onSave={props.updateCard}
        onCheck={props.selectCard}
        displayedAs="group"/>
    </span>
  )
})
};

const mapStateToProps = state => {
  return {
    cards: state.cardsReducer.cards,
    loading: state.cardsReducer.loading,
  }
}

const mapDispatchToProps = {
  updateCard: cardActions.updateCard,
  selectCard: cardActions.selectCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
