import React, {useState, useRef, useEffect} from 'react';
import './Card.css';
import PropTypes from 'prop-types';

import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';
import withLoadingDelay from './../../../../hoc/withLoadingDelay/withLoadingDelay';

const Card = (props) => {

  const [cardState, setCardState] = useState({
    isEditable: false,
    temp: {},
  });

  const viewOnly = useRef(false);

  const switchCardStyleHandler = (event) => {
    props.onCheck(props.data.id, event.target.checked)
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
    props.onSave(props.data.id, {...cardState.temp})
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
      isEditable: false,
      temp: {},
    });
    viewOnly.current = false;
  };

  viewOnly.current = props.disabled;

  useEffect(() => {
    if (viewOnly.current) {
      setViewOnly();
      viewOnly.current =  false;
    }
  }, [props.disabled]); // eslint-disable-line

  return (
    <div className={"item container card bg-light mb-4 " + (props.isSelected ? "border-info" : "border-secondary")}>
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
        selectMode={props.selectMode}/>
      <CardBody 
        disabled={props.disabled}
        isEditable={cardState.isEditable}
        titleChanged={cardChangeHandler.bind(this, 'title')}
        titleTempValue={cardState.temp.title}
        titleLabel={props.data.title}
        textChanged={cardChangeHandler.bind(this, 'body')}
        textTempValue={cardState.temp.body}
        textLabel={props.data.body} />
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
};

export default withLoadingDelay(Card);
