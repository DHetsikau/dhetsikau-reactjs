import React, {useState, useRef, useEffect} from 'react';
import './Card.css';
import { FaCheck, FaPencilAlt, FaTimes } from 'react-icons/fa';

const Card = (props) => {

    const [cardState, setCardState] = useState({
        isStylized: false,
        isEditable: false,
        temp: {},
    });

    const viewOnly = useRef(false);

    const switchCardStyleHandler = () => {
      setCardState({
        ...cardState,
        isStylized: !cardState.isStylized,
      });
    };

    const editCardBtnHandler = () => {
      setCardState({
        ...cardState,
        isStylized: false,
        isEditable: true,
        temp: {...props.data},
      });
    };

    const saveCardBtnHandler = () => {
      setCardState({
        ...cardState,
        isEditable: false,
      });
      props.onsave(props.data.id, {...cardState.temp})
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

    const renderEditModeButtons = () => {
      return (!props.disabled) ? (
        <span>
          <FaCheck className="save ic" onClick={saveCardBtnHandler.bind(this)}/>
          <FaTimes className="del ic" onClick={declineCardBtnHandler.bind(this)}/>
        </span>
      ) : '';
    };

    const renderViewModeButtons = () => {
      return (
        <span>
          {!props.disabled ? <FaPencilAlt className="edit ic" onClick={editCardBtnHandler.bind(this)}/> : ''}
          <input type="checkbox" onChange={switchCardStyleHandler} checked={cardState.isStylized} />
        </span>
      );
    };

    const maskLabel = (srcStr, validChars) => {
      return srcStr.length > validChars ? srcStr.slice(0, validChars) + '...' : srcStr;
    };

    const setViewOnly = () => {
      setCardState({
        ...cardState,
        isEditable: false,
        temp: {},
      });
      viewOnly.current = false;
    }

    viewOnly.current = props.disabled;

    useEffect(() => {
      if (viewOnly.current) {
        setViewOnly();
        viewOnly.current =  false;
      }
    }, [props.disabled]); // eslint-disable-line

    return (
      <div className={"item container card bg-light mb-4 " + (cardState.isStylized ? "border-info" : "border-secondary")}>
        <div className={"card-header text-white " + (cardState.isStylized ? "bg-info" : "bg-dark")}>
          <div className= "ch-align">
            {(cardState.isEditable && !props.disabled) ?
              <input
                type="text"
                className="iw-150 ih-20"
                onChange={cardChangeHandler.bind(this, 'header')}
                defaultValue={cardState.temp.header} /> :
              maskLabel(props.data.header, 12)}
          </div>
          <div className="box">
            {cardState.isEditable ? renderEditModeButtons() : renderViewModeButtons()}
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {(cardState.isEditable && !props.disabled)?
              <input
                type="text"
                className="iw-200 ih-30"
                onChange={cardChangeHandler.bind(this, 'title')}
                defaultValue={cardState.temp.title} /> :
              maskLabel(props.data.title, 12)}
          </h5>
          <p className="card-text">
            {(cardState.isEditable && !props.disabled) ?
              <textarea
                className="ta"
                onChange={cardChangeHandler.bind(this, 'body')}
                defaultValue={cardState.temp.body} /> :
              maskLabel(props.data.body, 40)}
          </p>
        </div>
      </div>
    );
}

export default Card;
