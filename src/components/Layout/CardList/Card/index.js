import React, { useState, useEffect } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../../hoc/withLoadingDelay';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as cardActions from '../../../../store/actions/cardActions';
import classNames from 'classnames';

const Card = props => {
  
  const [cardState, setCardState] = useState({
    isEditable: false,
    temp: {},
  });
  
  const dispatch = useDispatch();
  
  const hist = useHistory();

  const dblClickCardHandler = () => {
    hist.push(`card/${props.id}`);
};

  const switchCardStyleHandler = (event) => {
    dispatch(cardActions.selectCard(props.data.id, event.target.checked));
  };

  const editCardBtnHandler = () => {
    setCardState({
      ...cardState,
      isEditable: true,
      temp: {...props.data},
    });
  };

  const saveCardBtnHandler = () => {
    setCardState({
      ...cardState,
      isEditable: false,
    });
    dispatch(cardActions.updateCard(props.data.id, {...cardState.temp}));
  };
  
  const declineCardBtnHandler = () => {
    setCardState({
      ...cardState,
      isEditable: false,
      temp: {},
    });
  };

  const cardChangeHandler = (propName, event) => {
    setCardState({
      ...cardState,
      temp: {
        ...cardState.temp,
        [propName]: event.target.value,
      },
    });
  };

  const setViewOnly = () => {
    setCardState({
      ...cardState,
      isEditable: props.viewMode,
      temp: {},
    });
  };

  useEffect(() => {
      setViewOnly();
  }, [props.disabled]); // eslint-disable-line
  
  const cardClass = classNames("container" , "card", "bg-light", "mb-4", {
    "border-info" : props.isSelected,
    "border-secondary" : !props.isSelected,
    "group-item" : props.displayedAs === 'group',
    "single-item" : props.displayedAs === 'single',
  });

  return (
    <div 
      onDoubleClick={ (!cardState.isEditable && props.displayedAs === 'group') ? dblClickCardHandler : null}
      className={cardClass}>
      <CardHeader
        disabled={props.disabled}
        isSelected={props.isSelected}
        isEditable={cardState.isEditable}
        headerChanged={cardChangeHandler.bind(this, 'header')}
        headerTempValue={cardState.temp.header}
        headerLabel={props.data.header}
        save={saveCardBtnHandler.bind(this)}
        decline={declineCardBtnHandler.bind(this)}
        edit={editCardBtnHandler.bind(this)}
        switch={switchCardStyleHandler.bind(this)} 
        selectMode={props.selectMode}
        displayedAs={props.displayedAs}/>
      <CardBody 
        disabled={props.disabled}
        isEditable={cardState.isEditable}
        titleChanged={cardChangeHandler.bind(this, 'title')}
        titleTempValue={cardState.temp.title}
        titleLabel={props.data.title}
        textChanged={cardChangeHandler.bind(this, 'body')}
        textTempValue={cardState.temp.body}
        textLabel={props.data.body} 
        displayedAs={props.displayedAs}/>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
};

export default withLoadingDelay(Card);
