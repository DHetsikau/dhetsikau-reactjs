import React from 'react';
import StyledDiv from '../../../../common/components/StyledDiv';

import './index.css'

const viewOnlyPanel = props =>
  <StyledDiv
    alternate={props.viewMode}
    alternateTextColor="#61dafb"
    alternateBoxColor="#282c34"
    alternateBorderColor="#a52a2a"
    disabled={props.selectMode}
    disabledTextColor="#505050"
    disabledBoxColor="gray"
    disabledBorderColor="dimgray">
    <input className="cb-m-15 c-p"
      type="checkbox"
      id="viewMode"
      onChange={props.switchViewMode}
      checked={props.viewMode}
      disabled={props.selectMode}/>
    <label className="form-check-label c-p" htmlFor="viewMode">
      View only
    </label>
  </StyledDiv>

export default viewOnlyPanel;
