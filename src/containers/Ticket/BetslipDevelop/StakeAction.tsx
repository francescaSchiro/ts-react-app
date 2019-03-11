import styled from 'src/theme/default/index';

const StakeAction = styled.div`
    box-sizing: border-box;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: #389b05;
    font-size: 18px;

    &:first-of-type{
        &::before {
        content:'1 su 3';
        position: absolute;
        left: -170%;
        color: #bbb;
        font-style: normal;
        font-size: 14px;

    }
    }
`

export default StakeAction;