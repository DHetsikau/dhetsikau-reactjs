import styled from 'styled-components';

const styledDiv = styled.div`
  background-color: ${props=> props.disabled ? props.disabledBoxColor : (props.alternate ? props.alternateBoxColor : "#282c34")};
  box-shadow: 0 2px 3px #ccc;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
  width: 20%;
  display: inline-block;
  color: ${props=> props.disabled ? props.disabledTextColor : ( props.alternate ? props.alternateTextColor : "white")};
  border: 1px solid ${props=> props.disabled ? props.disabledBorderColor : ( props.alternate ? props.alternateBorderColor : "#eee")};
`;

export default styledDiv;
