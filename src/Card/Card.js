import React from 'react';
import './Card.css';

function Card() {
    return (
      <div className="item container border-secondary card bg-light mb-4">
        <div className="card-header text-white bg-dark">The Card</div>
        <div className="card-body">
          <h5 className="card-title">Listen up!</h5>
          <p className="card-text">Your AD could be placed here.</p>
        </div>
      </div>
    )
}

export default Card;