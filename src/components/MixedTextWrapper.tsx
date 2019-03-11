import styled from '../theme/default/index';

interface MyProps {
  padding?: string,
  lineHeight?: number
}

const MixedTextWrapper = styled.div`
  display: block;
  white-space: normal;
  text-align: left;
  padding: ${(props:MyProps)=> props.padding ? props.padding : '0px'};
  ${(props: MyProps) => `line-height: ${props.lineHeight};`}
`;

export default MixedTextWrapper;
