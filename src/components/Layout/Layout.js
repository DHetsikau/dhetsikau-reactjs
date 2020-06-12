import React, {useState} from 'react';
import './Layout.css';

import ReactHeader from './ReactHeader/ReactHeader';
import Cockpit  from './Cockpit/Cockpit';
import CardList from './CardList/CardList';

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

  return (
    <div>
      <ReactHeader />
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
    </div>
  )
}

export default Layout;
