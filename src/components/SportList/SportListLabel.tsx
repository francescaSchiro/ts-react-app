import styled from '../../theme/default/index';

interface MyProps {
  active: boolean;
}

const SportListLabel = styled('div')<MyProps>`
  color: ${props => (props.active ? '#b9d531' : '#909090')};
  font-weight: 700;
  margin-top: 3px;
  position: relative;
  ${props =>
    props.active
      ? `&::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            left: 50%;
            bottom: -6px;
            background: #b9d531;
            -moz-transform: translate(-50%, 0);
            -ms-transform: translate(-50%, 0);
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
          }`
      : `&::after {
            content: '' }; `};
`;

export default SportListLabel;
