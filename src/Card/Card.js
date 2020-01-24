import React, {useState} from 'react';
import './Card.css';

function Card() {
    const [cardState, setCardState] = useState({
        isStylized: false,
    });

    const switchCardStyleHandler = () => {
      setCardState({
        isStylized: !cardState.isStylized,
      });
    }

    return (
      <div className={"item container card bg-light mb-4 " + (cardState.isStylized ? "border-info" : "border-secondary")}>
        <div className={"card-header text-white " + (cardState.isStylized ? "bg-info" : "bg-dark")}>
          <div className= "ch-align">The Card</div>
          <div className="box">
            <input type="checkbox" onClick={switchCardStyleHandler}/>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Listen up!</h5>
          <p className="card-text">Your AD could be placed here.</p>
        </div>
      </div>
    );
}

export default Card;