import styled from '../../theme/default/index';

interface MyProps {
  gridColumn: string;
}
const GameOutcome = styled.div`
  grid-column: ${(props: MyProps) => props.gridColumn};
  grid-row: 3 / 4;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: black;
  padding: 3px 0;
  background-color: #eaeaea;

  box-shadow: inset 0 -1px rgba(0,0,0,.05);
  border-radius: 2px;
`;

export default GameOutcome;
