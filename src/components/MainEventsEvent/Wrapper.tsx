import styled from 'src/theme/default/index';

const Wrapper = styled.div`
  padding: 5px 7px 8px 7px;
  background-color: white;
  display: grid;
  grid-gap: 4px;
  grid-template: 31px 14px 40px / 1fr 1fr 2fr 2fr 1.5fr;
  font-size: 0.9em;
  
  &:not(:last-child){
  border-bottom: 1px solid #cbcbcb;
  }
`;

export default Wrapper;
