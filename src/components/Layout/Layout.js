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
        },
      isSelected: false,},
      {data: {
        id: "www",
        header: "The Card 2",
        title: "Listen up! 2",
        body: "Your AD could be placed here. 2",
        },
      isSelected: false,},
      {data: {
        id: "eee",
        header: "The Card 3",
        title: "Listen up! 3",
        body: "Your AD could be placed here. 3",
        },
      isSelected: false,},
      {data: {
        id: "rrr",
        header: "The Card 4",
        title: "Listen up! 4",
        body: "Your AD could be placed here. 4",
        },
      isSelected: false,},
      {data: {
        id: "ttt",
        header: "The Card 5",
        title: "Listen up! 5",
        body: "Your AD could be placed here. 5",
        },
      isSelected: false,},
      {data: {
        id: "yyy",
        header: "The Card 6",
        title: "Listen up! 6",
        body: "Your AD could be placed here. 6",
        },
      isSelected: false,},
      {data: {
        id: "uuu",
        header: "The Card 7",
        title: "Listen up! 7",
        body: "Your AD could be placed here. 7",
        },
      isSelected: false,},
    ],
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
 
  const selectCardHandler = (id, value) =>  {
    
    const cards = [...layoutState.cards];
    const cardIndex = cards.findIndex(c => {
      return c.data.id === id
    });
    const card = cards[cardIndex];
    card.isSelected = value;
    cards[cardIndex] = card;
    setLayoutState({
      ...layoutState,
      cards: cards,
    })
  }

  const deleteCardsHandler = () => {
    const cards = [...layoutState.cards].filter(c => {
      return !c.isSelected
    });
    setLayoutState({
      ...layoutState,
      cards: cards,
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
        onDeleteCards = {deleteCardsHandler}
      />
      <CardList 
        cards={layoutState.cards}
        onSaveCard={saveChangesHandler}
        viewMode={layoutState.viewMode}
        selectMode={layoutState.selectMode}
        onCheckCard={selectCardHandler}
      />
    </div>
  )
}

export default Layout;
