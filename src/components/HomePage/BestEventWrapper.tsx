import styled from '../../theme/default/index';

const BestEventWrapper = styled.div`
  width: calc(100% - 70px);
  margin: 0 10px 0 0;
  background-color: white;
  box-shadow: 1px 1px 2px 0 rgba(0,0,0,.28);
  
  display:grid;
  grid-template: repeat(3, calc(100%/3)) / repeat(9, calc(100%/9)) ;
  

`;

export default BestEventWrapper;
