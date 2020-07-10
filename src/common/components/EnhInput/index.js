import React from 'react';
import './index.css';

import { GiPokecog } from 'react-icons/gi';

const EnhInput = props => {
  return (
    <div className="container">
      <div className="form-group">
        <div className="iconedLabel">
          <label htmlFor={props.labelFor}>{props.labelValue} </label>
          <span>
            {props.touched && props.shouldValidate &&
              <GiPokecog 
                className={"iconPos " + (props.invalid ? "iconInvalid" : "iconValid")}
                title={props.invalid ? props.validationDescription : "Valid"}/>}
          </span>
        </div>
        <input
          className="form-control"
          id={props.labelFor}
          type={props.elementType}
          placeholder={props.elementConfig.placeholder}
          aria-describedby={props.descriptionId}
          onChange={props.changed}/>
        {props.description &&
          <small id={props.descriptionId} className="form-text text-muted">{props.description}</small>}
      </div>
    </div>
  );
}

export default EnhInput;
