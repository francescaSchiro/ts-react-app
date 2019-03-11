import styled from 'src/theme/default/index';


const ValueKey = styled.div`
    width: calc(100% / 3);
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #fff;
    color: #222;
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
    &:nth-child(3n+0) {
        border-right: 0;
    }
    &:nth-child(n+10):nth-child(-n+12) {
        border-bottom: 0;
    }

    &:nth-child(12) {
        background: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_backspace.png?v=2.6.8') center no-repeat #fff;
        background-size: auto 68%;
    }






  
`

export default ValueKey;