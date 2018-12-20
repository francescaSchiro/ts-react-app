import styled from '../theme/default/index';
import P from './P';

interface MyProps {
  fontWeight?: number;
  fontSize?: string;
}

const PLeftBanner = styled(P)`
  display: inline;
  text-align: left;
  font-size: 1.2em;
  ${(props: MyProps) => `font-weight: ${props.fontWeight};`}
  ${(props: MyProps) => `font-size: ${props.fontSize};`}
`;

export default PLeftBanner;
