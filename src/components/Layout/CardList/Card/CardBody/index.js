import React from 'react';
import './index.css';

import { maskLabel } from '../../../../../common/utils/commonUtils';

const cardBody = (props) =>
  <div className="card-body">
    <h5 className="card-title">
      {(props.isEditable && !props.disabled)?
        <input
          type="text"
          className="iw-200 ih-30"
          onChange={props.titleChanged}
          defaultValue={props.titleTempValue} /> :
        maskLabel(props.titleLabel, 20)}
    </h5>
    <p className="card-text">
      {(props.isEditable && !props.disabled) ?
        <textarea
          className="ta"
          onChange={props.textChanged}
          defaultValue={props.textTempValue} /> :
        maskLabel(props.textLabel, 40)}
    </p>
  </div>

export default cardBody;
