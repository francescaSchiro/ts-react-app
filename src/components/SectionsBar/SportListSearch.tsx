import styled from 'src/theme/default/index';

const SportListSearch = styled.div`
  position: relative;
  width: 45px;
  min-width: 45px;
  background-color: #24afb2;
  background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_search.png?v=2.5.6');
  background-size: 25px auto;
  background-repeat: no-repeat;
  background-position: center;
  transform: scaleX(-1);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(45px);
    width: 45px;
    height:100%;
    min-width: 45px;
    box-shadow: inset 20px 0px 11px 1px rgba(0, 0, 0, 0.5);
  }
`;

export default SportListSearch;
