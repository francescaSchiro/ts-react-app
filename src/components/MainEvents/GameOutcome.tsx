import styled from '../../theme/default/index';

interface MyProps {
  gridColumn: string,
}
const GameOutcome = styled.div`
  grid-column:  ${(props: MyProps) => props.gridColumn};
  grid-row: 3 / 4;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: black;
  background-color: #eaeaea;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.5em;

`;

export default GameOutcome;
