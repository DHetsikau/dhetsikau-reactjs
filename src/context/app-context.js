import React, {useEffect} from 'react';

import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

const AppContext = React.createContext({
  cardsState: [],
  getCardsCount: () => 0,
  updateHandler: () => {},
  selectHandler: () => {},
  deleteHandler: () => {},
  addHandler: () => {},
});

export const AppContextProvider = (props) => {
  const [cardsState, setCardsState] = React.useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then((r) => {
        setCardsState(r.data.slice(0, 15).map((i) => {
          return {
            data: {
              id: i.Number,
              header: i.Name,
              title: i.Types.join(', '),
              body: i.About,
            },
            isSelected: false,
          };
        }),);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const updateHandler = (id, vals) => {
    const cardIndex = cardsState.findIndex(c => {
        return c.data.id === id
      });
    const card = {...cardsState[cardIndex]};
    card.data = {...vals};
    const cards = [...cardsState];
    cards[cardIndex] = card;
    setCardsState(cards);
  };

  const selectHandler = (id, val) => {
    const cards = [...cardsState];
    const cardIndex = cards.findIndex(c => {
      return c.data.id === id
    });
    const card = cards[cardIndex];
    card.isSelected = val;
    cards[cardIndex] = card;
    setCardsState(cards);
  };

  const deleteHandler = () => {
    const cards = [...cardsState].filter(c => {
        return !c.isSelected
      });
      setCardsState(cards);
  };

  const addHandler = () => {
    setCardsState(
      [...cardsState, {data: { id: uuidv4(),}, isSelected: false,}],
    );
  };

  return (
    <AppContext.Provider
      value={{
          cards: cardsState,
          getCardsCount: () => cardsState.length,
          updateHandler,
          selectHandler,
          deleteHandler,
          addHandler,
      }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext;
