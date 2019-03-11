import styled from 'src/theme/default/index';

const ValuePreset = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: #fff;
    background: #389b05;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;

    &:nth-child(even) {
        border-right: 0;
    }

    &:nth-child(n+7):nth-child(-n+8) {
        border-bottom: 0;
    }



`

export default ValuePreset;