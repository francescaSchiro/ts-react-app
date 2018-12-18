import styled from '../theme/default/index';

interface MyProps {
  bg?: string,
  fontColor?: string
}

const TitleWrapper = styled.div`
  width: auto;
  height: 20px;
  padding: 10px 0 10px 0;
  text-align: center;
  ${(props:MyProps) => `background-color: ${props.bg};`}
  ${(props:MyProps) => `color: ${props.fontColor};`}
`;

export default TitleWrapper;
