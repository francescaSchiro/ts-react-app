import styled from 'src/theme/default/index';

interface IArrowDown {
    showInfo: boolean;
    onClick: () => void;
}

const ArrowDown = styled.div`
    width: 10.2px;
    height: 24px;
    background-image:  url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_pv_chevron.png?v=2.6.8');

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${(props: IArrowDown) => props.showInfo ? null : 'rotate(180deg)'};
`

export default ArrowDown;