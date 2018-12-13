import styled from '../../theme/default/index';

interface MyProps {
  gridColumn: string,
  rightBorder: boolean
}

const BestEventGameItemValue = styled.div`
  grid-column: ${(props: MyProps) => props.gridColumn};
  grid-row: 2 / 4;

  display: flex;
  flex-direction: row;
  border-right: ${(props : MyProps) => props.rightBorder ? '1px solid rgba(225,225,225, .4)' : 'none'};
  justify-content: center;
  align-items: center;
  color: #222;
  padding: .5em;
  font-weight: 700;
  font-size: .9em;

`;

export default BestEventGameItemValue;
