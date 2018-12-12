import styled from '../../theme/default/index';

const DropDownLogin = styled.div`
  margin: 0 8px 0 8px;
  height: 45px;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_arrow_down_black.png?v=2.5.5');
    background-position: 0 center;
    background-repeat: no-repeat;
    background-size: 90%;
    width: 12px;
    min-height: 12px;
    margin: 0 0 0 4px;
  }
`;

export default DropDownLogin;
