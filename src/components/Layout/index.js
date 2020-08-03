import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './index.css';

import ReactHeader from './ReactHeader';
import Cockpit  from './Cockpit';
import CardList from './CardList';
import NotFound from './NotFound';
import SignIn from './SignIn';
import SingleCard from './SingleCard';
import SignOut from './SignOut';
import Settings from './Settings';

import { useSelector, useDispatch } from 'react-redux';
import { toggleViewOnlyModeCheck, toggleMgmtModeCheck } from '../../store/actions/modeActions';

const Layout = () => {

  const dispatch = useDispatch();

  const viewMode = useSelector(state=> state.modeReducer.viewMode);
  const selectMode = useSelector(state=> state.modeReducer.selectMode);

  const main = (
    <React.Fragment>
      <Cockpit
        viewMode={viewMode}
        selectMode={selectMode}
        switchViewMode={() => {dispatch(toggleViewOnlyModeCheck())}}
        switchSelectMode={() => {dispatch(toggleMgmtModeCheck())}}
      />
      <CardList 
        viewMode={viewMode}
        selectMode={selectMode}
      />
    </React.Fragment>
  );

  const user = useSelector(state => state.authReducer.currentUser);

  return (
    <div>
      <ReactHeader />
      <Switch>
        <Route path="/" exact render={() => main}/>
        <Route path="/signin" exact component={SignIn}/>
        <Route path="/signout" exact component={SignOut}/>
        <Route path="/card/:id" exact component={SingleCard}/>
        {(user && user.roles.includes('ADM')) ?
          <Route path="/settings" exact component={Settings} /> : null }
        <Route component={NotFound}/>
      </Switch>
    </div>
  )
};

export default Layout;
