import axios from 'axios';
import * as actionTypes from './actionTypes';

export const updateCard = (id, vals) => ({
  type: actionTypes.UPDATE_CARD,
  id,
  vals,
});

export const selectCard = (id, val) => ({
  type: actionTypes.SELECT_CARD,
  id,
  val,
});

export const removeCard = () => ({
  type: actionTypes.REMOVE_CARD,
});

export const createCard = () => ({
  type: actionTypes.CREATE_CARD,
});

export const fetchCardsStart = () => {
  return {
    type: actionTypes.FETCH_CARDS_START,
  }
};

export const fetchCardsFail = (error) => {
  return {
    type: actionTypes.FETCH_CARDS_FAILURE,
    error: error,
  }
};

export const fetchCardsSuccess = (cards) => {
  return {
    type: actionTypes.FETCH_CARDS_SUCCESS,
    cards: cards,
  }
};

export const fetchCards = () => {
  return dispatch => {
    dispatch(fetchCardsStart());
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then((r) => {
        dispatch(fetchCardsSuccess(r.data.slice(0, 15).map((i) => {
          return {
            data: {
              id: i.Number,
              header: i.Name,
              title: i.Types.join(', '),
              body: i.About,
            },
            isSelected: false,
          };
        })));
      })
      .catch((e) => {
        dispatch(fetchCardsFail(e));
      })
  }
};
