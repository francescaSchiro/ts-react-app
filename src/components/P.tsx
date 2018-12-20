import styled from '../theme/default/index';

interface MyProps {
  textAlign?: string,
  margin?: string,
  fontSize?: string,
  fontWeight?: number,
  display?: string
}

const P = styled.p`
  display: ${(props:MyProps)=> props.display ? props.display : 'flex'};
  color: inherit;
  white-space:normal;
  text-align: ${(props:MyProps)=> props.textAlign ? props.textAlign : 'center' };
  margin: ${(props:MyProps)=> props.margin ? props.margin : '0' };
  font-size: 1em;
`;

export default P;
