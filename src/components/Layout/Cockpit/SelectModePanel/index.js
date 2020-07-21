import React from 'react';
import StyledDiv from '../../../../common/components/StyledDiv';

import './index.css';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeCard, createCard } from '../../../../store/actions/cardActions';

const SelectModePanel = props => {

  const dispatch = useDispatch();

  const renderSelectButtons = () =>
    <div className="ch-align">
      <div className="cb-ml-15">
        <button
          type="button"
          className="btn btn-success c-p add-btn"
          onClick={() => {dispatch(createCard())}}>
            <FaPlus className="add_ic"/>
        </button>
        <button
          type="button"
          className="btn btn-danger c-p del-btn"
          onClick={() => {dispatch(removeCard())}}>
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
      disabledBorderColor="dimgray">
      <input className="cb-m-15 c-p ch-align"
        type="checkbox"
        id="selectMode"
        onChange={props.switchSelectMode}
        checked={props.selectMode}
      disabled={props.viewMode}/>
      <label className="form-check-label c-p ch-align" htmlFor="selectMode">
        Management
      </label>
      {props.selectMode && renderSelectButtons()}
    </StyledDiv>
  )
}

export default SelectModePanel;
