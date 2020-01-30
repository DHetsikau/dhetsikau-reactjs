import React, {useState} from 'react';
import './Card.css';
import { FaCheck, FaPencilAlt, FaTimes } from 'react-icons/fa';

function Card() {
    const [cardState, setCardState] = useState({
        isStylized: false,
        isEditable: false,
        data: [{
          header: "The Card",
          title: "Listen up!",
          body: "Your AD could be placed here.",
        }],
        temp: [{
          header: "",
          title: "",
          body: "",
        }],
    });

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
        temp: cardState.data,
      });
    };

    const saveCardBtnHandler = () => {
      setCardState({
        ...cardState,
        isStylized: false,
        isEditable: false,
        data: [{
            header: cardState.temp[0].header,
            title: cardState.temp[0].title,
            body: cardState.temp[0].body,
          }],
      });
    };

    const declineCardBtnHandler = () => {
      setCardState({
        ...cardState,
        isStylized: false,
        isEditable: false,
        temp: [{
          header: "",
          title: "",
          body: "",
        }],
      });
    };

    const cardChangeHandler = (propName, event) => {
      setCardState({
        ...cardState,
        temp: [{
          ...cardState.temp[0],
          [propName]: event.target.value,
        }],
      });
    };

    const renderEditModeButtons = () => {
      return (
        <span>
          <FaCheck className="save ic" onClick={saveCardBtnHandler.bind(this)}/>
          <FaTimes className="del ic" onClick={declineCardBtnHandler.bind(this)}/>
        </span>
      );
    };

    const renderViewModeButtons = () => {
      return (
        <span>
          <FaPencilAlt className="edit ic" onClick={editCardBtnHandler.bind(this)}/>
          <input type="checkbox" onChange={switchCardStyleHandler} checked={cardState.isStylized} />
        </span>
      );
    };

    const maskLabel = (srcStr, validChars) => {
      return srcStr.length > validChars ? srcStr.slice(0, validChars) + '...' : srcStr;
    };

    return (
      <div className={"item container card bg-light mb-4 " + (cardState.isStylized ? "border-info" : "border-secondary")}>
        <div className={"card-header text-white " + (cardState.isStylized ? "bg-info" : "bg-dark")}>
          <div className= "ch-align">
            {cardState.isEditable ?
              <input
                type="text"
                className="iw-150 ih-20"
                onChange={cardChangeHandler.bind(this, 'header')}
                defaultValue={cardState.temp[0].header} /> :
              maskLabel(cardState.data[0].header, 12)}
          </div>
          <div className="box">
            {cardState.isEditable ? renderEditModeButtons() : renderViewModeButtons()}
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {cardState.isEditable ?
              <input
                type="text"
                className="iw-200 ih-30"
                onChange={cardChangeHandler.bind(this, 'title')}
                defaultValue={cardState.temp[0].title} /> :
              maskLabel(cardState.data[0].title, 12)}
          </h5>
          <p className="card-text">
            {cardState.isEditable ?
              <textarea
                className="ta"
                onChange={cardChangeHandler.bind(this, 'body')}
                defaultValue={cardState.temp[0].body} /> :
              maskLabel(cardState.data[0].body, 40)}
          </p>
        </div>
      </div>
    );
}

export default Card;