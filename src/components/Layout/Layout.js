import React, {useState} from 'react';
import './Layout.css';

import ReactHeader from './ReactHeader/ReactHeader';
import Cockpit  from './Cockpit/Cockpit';
import CardList from './CardList/CardList';

function Layout() {
  const [layoutState, setLayoutState] = useState({
    viewMode: false,
    selectMode: false,
    cards: [
      {data: {
        id: 'qqq',
        header: "The Card 1",
        title: "Listen up! 1",
        body: "Your AD could be placed here. 1",
      },},
      {data: {
        id: "www",
        header: "The Card 2",
        title: "Listen up! 2",
        body: "Your AD could be placed here. 2",
      },},
      {data: {
        id: "eee",
        header: "The Card 3",
        title: "Listen up! 3",
        body: "Your AD could be placed here. 3",
      },},
      {data: {
        id: "rrr",
        header: "The Card 4",
        title: "Listen up! 4",
        body: "Your AD could be placed here. 4",
      },},
      {data: {
        id: "ttt",
        header: "The Card 5",
        title: "Listen up! 5",
        body: "Your AD could be placed here. 5",
      },},
      {data: {
        id: "yyy",
        header: "The Card 6",
        title: "Listen up! 6",
        body: "Your AD could be placed here. 6",
      },},
      {data: {
        id: "uuu",
        header: "The Card 7",
        title: "Listen up! 7",
        body: "Your AD could be placed here. 7",
      },},
    ],
    selectedCards: [],
});

  const saveChangesHandler = (id, vals) => {
    const cardIndex = layoutState.cards.findIndex(c => {
      return c.data.id === id
    });
    const card = {...layoutState.cards[cardIndex]};
    card.data = {...vals};
    const cards = [...layoutState.cards];
    cards[cardIndex] = card;
    setLayoutState({
      ...layoutState,
      cards: cards,
    });
  }

  const switchViewModeHandler = () => {
    setLayoutState({
      ...layoutState,
      viewMode: !layoutState.viewMode,
    });
  }

  const switchSelectModeHandler = () => {
    setLayoutState({
      ...layoutState,
      selectMode: !layoutState.selectMode,
    });
  }
 
  const selectCardHandler = (id) =>  {
    const selectedCards = [...layoutState.selectedCards];
    selectedCards.push(id);
    setLayoutState({
      ...layoutState,
      selectedCards: selectedCards,
    });
  }

  const unselectCardHandler = (id) => {
    const selectedCards = [...layoutState.selectedCards];
    const cardIndex = selectedCards.indexOf(id);
    (cardIndex > -1) && selectedCards.splice(cardIndex, 1);
    setLayoutState({
      ...layoutState,
      selectedCards: selectedCards,
    });
  }

  const deleteCardsHandler = () => {
    const cards = [...layoutState.cards];
    const selectedCards = [...layoutState.selectedCards];
    selectedCards.forEach(id => {
      const cardIndex = cards.findIndex(c => {
        return c.data.id === id
      });
      (cardIndex > -1) && cards.splice(cardIndex, 1);
    });
    setLayoutState({
      ...layoutState,
      cards: cards,
      selectedCards: [],
    })
  }

  return (
    <div>
      <ReactHeader />
      <Cockpit
        viewMode={layoutState.viewMode}
        switchViewMode={switchViewModeHandler}
        selectMode={layoutState.selectMode}
        switchSelectMode={switchSelectModeHandler}
        deleteCards = {deleteCardsHandler}
      />
      <CardList 
        cards={layoutState.cards}
        selectedCards={layoutState.selectedCards}
        saved={saveChangesHandler}
        viewMode={layoutState.viewMode}
        selectMode={layoutState.selectMode}
        selectCard={selectCardHandler}
        unselectCard={unselectCardHandler}
      />
    </div>
  )
}

export default Layout;
