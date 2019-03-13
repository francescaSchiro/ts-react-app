import styled from 'src/theme/default/index';

const OddChange = styled.span`
    /* display:flex;
    justify-content: flex-start;
    align-items: center; */
    position: relative;
    /* display: inline-block; */
    color: #393939; /* if closed: #909090 */
    margin-left: 11px;
    

    /* if oddChangePositive ? after : before */
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: -10px;
        color: #dc1a11;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #dc1a11;
        transform: rotate(225deg);
    }

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        right: -11px;
        color: #3B914C;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #3B914C;
        transform: rotate(45deg);
    }

`
export default OddChange;