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

    /*from 7th child on*/
    &:nth-child(n+7){
        border-bottom: 0;
    }

    /*from 7th to 8th child included 
        &:nth-child(n+7):nth-child(-n+8)
    */


`

export default ValuePreset;