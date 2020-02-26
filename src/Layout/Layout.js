import React, {useState} from 'react';
import logo from './logo.svg';
import './Layout.css';
import Card from '../Card/Card';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #282c34;
  box-shadow: 0 2px 3px #ccc;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
  width: 13%;
  color: ${props=> !props.alt ? "white" : "#61dafb" };
  border: 1px solid ${props=> !props.alt ? "#eee" : "#e83e8c"};
`;

function Layout() {
  const [layoutState, setLayoutState] = useState({
    viewMode: false,
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
    ]
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

  return (
    <div>
      <header className="App-header jumbotron card-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p> This is <code>ReactJS</code> App.</p>
      </header>
      <StyledDiv alt={layoutState.viewMode}>
          <input className="cb-m-15 c-p"
            type="checkbox"
            id="viewMode"
            onChange={switchViewModeHandler}
            checked={layoutState.viewMode}/>
          <label className="form-check-label c-p" htmlFor="viewMode">
             View only
          </label>
      </StyledDiv>
      <div>
        {
          layoutState.cards.map((card, index) => {
            return (
              <span className="g-align">
                <Card
                  key={card.data.id}
                  index={index}
                  data={card.data}
                  onsave={saveChangesHandler}
                  disabled={layoutState.viewMode} />
              </span>
            )
          })
        }
      </div>  
    </div>
  )
}

export default Layout;
