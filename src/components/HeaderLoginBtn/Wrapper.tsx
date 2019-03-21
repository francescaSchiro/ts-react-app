import styled from 'src/theme/default/index';

interface IWrapper {
  isLoginOpen: boolean,
}

const Wrapper = styled.button`
  all: unset;
  padding: 0 10px;
  /* margin: 0 8px 0 8px; */
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${(props: IWrapper) => props.isLoginOpen ? 'white' : '#222'};
  background-color:  ${(props: IWrapper) => props.isLoginOpen ? '#222' : 'white'};

  ${(props: IWrapper) => props.isLoginOpen ?
    `  &::after {
    content: '';
    display: inline-block;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_arrow_down_white.png?v=2.6.8');
    background-position: 0 center;
    background-repeat: no-repeat;
    background-size: 90%;
    transform: scaleY(-1);
    width: 12px;
    min-height: 12px;
    margin: 0 0 0 4px;
     }` :
    `  &::after {
    content: '';
    display: inline-block;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_arrow_down_black.png?v=2.5.5');
    background-position: 0 center;
    background-repeat: no-repeat;
    background-size: 90%;
    width: 12px;
    min-height: 12px;
    margin: 0 0 0 4px;
  }`};

`;

export default Wrapper;
