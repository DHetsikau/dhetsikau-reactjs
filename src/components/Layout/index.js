import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

import './index.css';

import ReactHeader from './ReactHeader';
import Cockpit  from './Cockpit';
import CardList from './CardList';
import NotFound from './NotFound';
import SignIn from './SignIn';

function Layout() {

  const [layoutState, setLayoutState] = useState({
    viewMode: false,
    selectMode: false,
  });

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

  const main = (
    <React.Fragment>
      <Cockpit
        viewMode={layoutState.viewMode}
        selectMode={layoutState.selectMode}
        switchViewMode={switchViewModeHandler}
        switchSelectMode={switchSelectModeHandler}
      />
      <CardList 
        viewMode={layoutState.viewMode}
        selectMode={layoutState.selectMode}
      />
    </React.Fragment>
  )

  return (
    <div>
      <ReactHeader />
      <Switch>
        <Route path="/" exact render={() => main}/>
        <Route path="/signin" exact component={SignIn}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  )
}

export default Layout;
