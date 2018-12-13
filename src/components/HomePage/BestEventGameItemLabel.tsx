import styled from '../../theme/default/index';

interface MyProps {
  gridColumn: [number, number],
  rightBorder: boolean
}

const BestEventGameItemLabel = styled.div`
  grid-column: ${(props: MyProps) => `${props.gridColumn[0] / props.gridColumn[1]}`};
  grid-row: 1 / 2;

  display: flex;
  border-right: ${(props : MyProps) => props.rightBorder ? '1px solid rgba(225,225,225, .4)' : 'none'};
  justify-content: center;
  align-items: center;
  padding: 1em;
  color: white;
  background-color: #909090;

  
`;

export default BestEventGameItemLabel;
