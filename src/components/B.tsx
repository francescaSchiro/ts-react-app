import styled from '../theme/default/index';

interface MyProps {
  textAlign?: string;
  margin?: string;
  fontSize?: string;
  display?: string

}

const B = styled.p`
  white-space: normal;
  color: black;
  font-weight: 700;
  display: ${(props:MyProps)=> props.display ? props.display : 'flex'};
  text-align: ${(props: MyProps) =>
    props.textAlign ? props.textAlign : 'center'};
  margin: ${(props: MyProps) => (props.margin ? props.margin : '0')};
  font-size: ${(props: MyProps) => (props.fontSize ? props.fontSize : '1em')};
`;

export default B;
