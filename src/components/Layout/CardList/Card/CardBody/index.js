import React from 'react';
import './index.css';

import { maskLabel } from '../../../../../common/utils/commonUtils';

const cardBody = (props) => {
  const [maskLabelTitle, maskLabelBody] = props.displayedAs === 'group' ? [20, 40] : [50, 200]; 
  return (<div className="card-body">
    <h5 className="card-title">
      {(props.isEditable && !props.disabled)?
        <input
          type="text"
          className={"ih-30 " + (props.displayedAs === 'group' ? " hw-200 " : " hw-550 ")}
          onChange={props.titleChanged}
          defaultValue={props.titleTempValue} /> :
        maskLabel(props.titleLabel, maskLabelTitle)}
    </h5>
    <p className="card-text">
      {(props.isEditable && !props.disabled) ?
        <textarea
          className={props.displayedAs === 'group' ? "g-ta" : "s-ta" }
          onChange={props.textChanged}
          defaultValue={props.textTempValue} /> :
        maskLabel(props.textLabel, maskLabelBody)}
    </p>
  </div>
  )}

export default cardBody;
