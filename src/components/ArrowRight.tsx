import styled from '../theme/default/index';

interface MyProps {
  width: string;
  height: string;
  margin: string;
}

const ArrowRight = styled.div`
  width: ${(props: MyProps) => props.width};
  height: ${(props: MyProps) => props.height};
  border-right: 2px solid #4a4a4a;
  border-bottom: 2px solid #4a4a4a;
  transform: rotate(-45deg);
  margin: ${(props: MyProps) => props.margin};
`;

export default ArrowRight;
