import styled from 'src/theme/default/index';

const Wrapper = styled.div`
  width: auto;
  height: 100%;
  margin: 0 10px 0 0;
  background-color: white;
  box-shadow: 1px 1px 2px 0 rgba(0,0,0,.28);
  
  display:grid;
  grid-template: 30px 25px 25px / repeat(9, auto) ;
  font-size: .9em;

`;

export default Wrapper;
