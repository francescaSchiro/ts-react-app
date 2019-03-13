import styled from 'src/theme/default/index';

interface IArrow {
        showCambia: boolean,
}

const Arrow = styled.div`
        width: 7px;
        height: 7px;
        margin-top: 3px;
        margin-left: 10px;

        border-right: 2px solid #4a4a4a;
        border-bottom: 2px solid #4a4a4a;
        transform: ${(props: IArrow) => props.showCambia
                ? `translate(-50%,0) rotate(-135deg)` // upArrow
                : `translate(-50%,-40%) rotate(45deg)` // downArrow
        }
`

export default Arrow;