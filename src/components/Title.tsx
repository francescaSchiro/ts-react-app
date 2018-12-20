import styled from '../theme/default/index';

interface MyProps {
  fontColor?: string,
  fontWeight?: number | string,
  textAlign?: string,
  fontSize?: string
}

const Title = styled.p`
  font-size: 15px;
  color: ${(props: MyProps) => props.fontColor};
  font-weight: ${(props: MyProps) => props.fontWeight ? props.fontWeight : 700};
  ${(props : MyProps) => `text-align: ${props.textAlign};`}
  ${(props : MyProps) => `font-size: ${props.fontSize};`}
  white-space:normal;
`;

export default Title;
