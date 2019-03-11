import styled from '../../theme/default/index';

const HasMoreNumberArrowDown = styled.div`
  color: black;
  font-size: 1.1em;
  
  margin-left: -12px;
  padding-right: 3px;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    right: -15px;
    border-right: 1px solid #4a4a4a;
    border-bottom: 1px solid #4a4a4a;
    width: 7px;
    height: 7px;
    transform: translate(-50%,-50%) rotate(45deg);
    
  }
`;

export default HasMoreNumberArrowDown;
