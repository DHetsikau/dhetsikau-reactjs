import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  cards: [],
};

const updateCard = (state, action) => {
  const cardIndex = state.cards.findIndex(c => {
    return c.data.id === action.id
  });
  const card = updateObject(state.cards[cardIndex], {data: action.vals});
  const cards = [...state.cards];
  cards[cardIndex] = card;
  return updateObject(state, {cards: cards,})
};

const selectCard = (state, action) => {
  const cardIndex = state.cards.findIndex(c => {
    return c.data.id === action.id
  });
  const card = updateObject(state.cards[cardIndex], {isSelected: action.val});
  const cards = [...state.cards];
  cards[cardIndex] = card;
  return updateObject(state, {cards: cards,})
};

const removeCard = state => {
  return updateObject(
    state, 
    {cards: [...state.cards].filter(c => {
      return !c.isSelected
    })});
};

const createCard = state => {
  return updateObject(
    state,
    {cards: [...state.cards, {data: { id: uuidv4(),}, isSelected: false,}]}
  )
};

const fetchCardsStart = state => {
  return updateObject(state, {loading : true})
};

const fetchCardsFailure = state => {
  return updateObject(state, {loading : false})
};

const fetchCardsSuccess = (state, action) => {
  return updateObject(state, {
    cards: action.cards,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.UPDATE_CARD :
      return updateCard(state, action);

    case actionTypes.SELECT_CARD :
      return selectCard(state, action);
    
    case actionTypes.REMOVE_CARD :
      return removeCard(state);
    
    case actionTypes.CREATE_CARD :
      return createCard(state);
    
    case actionTypes.FETCH_CARDS_START :
      return fetchCardsStart(state);
    
    case actionTypes.FETCH_CARDS_FAILURE :
      return fetchCardsFailure(state);
  
    case actionTypes.FETCH_CARDS_SUCCESS :
      return fetchCardsSuccess(state, action);
    
    default:
      return state;
  }
};

export default reducer;
