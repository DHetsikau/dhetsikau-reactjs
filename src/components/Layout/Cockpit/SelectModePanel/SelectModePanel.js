import React from 'react';
import StyledDiv from '../../../../common/components/StyledDiv/StyledDiv';

import './SelectModePanel.css';
import { FaTrashAlt } from 'react-icons/fa';

const selectModePanel = (props) => {

  const renderSelectButtons = () =>
    <div className="ch-align">
      <div className="cb-ml-15">
        <button
          type="button"
          className="btn btn-danger c-p del-btn"
          onClick={props.onDeleteCards}>
            <FaTrashAlt className="del_ic"/>
        </button>
      </div>
    </div>

  return (
    <StyledDiv
      alternate={props.selectMode}
      alternateTextColor="#61dafb"
      alternateBoxColor="#282c34"
      alternateBorderColor="#00FF7F"
      disabled={props.viewMode}
      disabledTextColor="#505050"
      disabledBoxColor="gray"
      disabledBorderColor="dimgray"
      >
    <input className="cb-m-15 c-p ch-align"
      type="checkbox"
      id="selectMode"
      onChange={props.switchSelectMode}
      checked={props.selectMode}
      disabled={props.viewMode}/>
    <label className="form-check-label c-p" htmlFor="selectMode">
      Select Mode
    </label>
    {props.selectMode && renderSelectButtons()}
  </StyledDiv>
  )
}

export default selectModePanel;
