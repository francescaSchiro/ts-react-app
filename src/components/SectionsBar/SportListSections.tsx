import styled from '../../theme/default/index';

const SportListSections = styled.div`
  display: flex;
  width: calc(100% - 45px);
  height: 100%;
  background-color: #222;
  color: white;
  overflow-x: auto;
  ::-webkit-scrollbar { 
    display: none; 
}
`;

export default SportListSections;
