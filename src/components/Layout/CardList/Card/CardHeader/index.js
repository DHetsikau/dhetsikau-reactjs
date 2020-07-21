import React from 'react';
import './index.css';

import { maskLabel } from '../../../../../common/utils/commonUtils';
import { FaCheck, FaPencilAlt, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';

const cardHeader = (props) => {

  const renderEditModeButtons = () => {
    return (
      !props.disabled && (
        <span>
          <FaCheck className="save ic" onClick={props.save}/>
          <FaTimes className="del ic" onClick={props.decline}/>
        </span>
      )
    );
  };

  const renderViewModeButtons = () => {
    return (
      <span>
        {!props.disabled && !props.selectMode && (<FaPencilAlt className="edit ic" onClick={props.edit}/>)}
        {props.selectMode && (<input type="checkbox" onChange={props.switch} checked={props.isSelected} />)}
      </span>
    );
  };

  const maskLabelChars = props.displayedAs === 'group' ? 12 : 30;
  
  const cardHeaderClass = classNames("card-header", "text-white", {
    "bg-info" : props.isSelected,
    "bg-dark" : !props.isSelected,
  }); 

  const cardHeaderInputClass = classNames("ih-20", {
    "iw-150" : props.displayedAs === 'group',
    "iw-500" : props.displayedAs === 'single',
  })

  return (
    <div className={cardHeaderClass}>
      <div className= "ch-align">
        {(props.isEditable && !props.disabled) ?
          <input
            type="text"
            className={cardHeaderInputClass}
            onChange={props.headerChanged}
            defaultValue={props.headerTempValue} /> :
          maskLabel(props.headerLabel, maskLabelChars )}
      </div>
      <div className="box">
      {props.isEditable ? renderEditModeButtons() : renderViewModeButtons()}
      </div>
    </div>
  )};

export default cardHeader;
