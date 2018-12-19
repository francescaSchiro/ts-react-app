import styled from '../theme/default/index';

interface MyProps {
  bg?: string,
  padding?: string
}

const TitleWrapper = styled.div`
  width: auto;
  height: 20px;
  padding: ${(props:MyProps)=> props.padding ? props.padding : '10px'};
  text-align: center;
  ${(props:MyProps) => `background-color: ${props.bg};`}

`;

export default TitleWrapper;
