import styled from '../../theme/default/index';

interface MyProps {
  gridColumn: string,
}
const EventContentGameAccordionTrigger = styled.div`
  grid-column:  ${(props: MyProps) => props.gridColumn};
  grid-row: 3 / 4;

  margin-left: 12px;
  display: flex;
  padding: 4px;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  color: #000;
  border: 1px solid #4a4a4a;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
`;

export default EventContentGameAccordionTrigger;
