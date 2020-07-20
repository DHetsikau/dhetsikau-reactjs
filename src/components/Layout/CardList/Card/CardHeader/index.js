import React from 'react';
import './index.css';

import { maskLabel } from '../../../../../common/utils/commonUtils';
import { FaCheck, FaPencilAlt, FaTimes } from 'react-icons/fa';

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

  return (
    <div className={"card-header text-white " + (props.isSelected ? "bg-info" : "bg-dark")}>
      <div className= "ch-align">
        {(props.isEditable && !props.disabled) ?
          <input
            type="text"
            className={"ih-20 " + (props.displayedAs === 'group' ? " iw-150 " : " iw-500 ")}
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
