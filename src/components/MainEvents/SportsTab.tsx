import styled from '../../theme/default/index';

interface MyProps {
  active: boolean;
}

const SportsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props: MyProps) => (props.active ? '#f6a81e' : 'transparent')};
  border-radius: 20px;
  padding: 3px 15px;

  color: black;
  font-weight: bold;
`;

export default SportsTab;
