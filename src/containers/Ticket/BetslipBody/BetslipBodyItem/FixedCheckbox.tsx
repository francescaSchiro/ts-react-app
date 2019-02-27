import styled from 'src/theme/default/index';

interface IFixedCheckbox {
    checked?: boolean,
}

const FixedCheckbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:16px;
    width: 16px;
    font-weight:bold;
    color: #fff;
    border: ${(props: IFixedCheckbox) => props.checked ? '2px solid #186cb5' : '2px solid #909090'};
    border-radius: 0 0 2px 2px ;
    opacity:1;

    /* &::after {
    box-sizing:border-box;
    position: absolute;
    top:0;
    left:0;
    content:'';
    height:16px;
    width: 16px;
    font-weight:bold;
    color: #fff;
    border: 2px solid #909090;
    border-radius: 0 0 2px 2px ;
    opacity:1;
    z-index: 10;
    } */
`
export default FixedCheckbox;
