import styled from '../theme/default/index';

interface MyProps {
  fontColor?: string,
  fontWeight?: number | string,
  textAlign?: string,
}

const Title = styled.p`
  font-size: 14px;
  color: ${(props: MyProps) => props.fontColor ? props.fontColor : '#777'};
  font-weight: ${(props: MyProps) => props.fontWeight ? props.fontWeight : 700};
  ${(props : MyProps) => `text-align: ${props.textAlign};`}
  white-space:normal;
`;

export default Title;
