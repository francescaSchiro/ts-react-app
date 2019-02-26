import styled from '../../theme/default/index';


const BetslipHeadTab = styled.div`
    height: 100%;
    border-bottom: 3px solid transparent;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items:center;
    text-transform: uppercase;
    z-index:1;
    & > *{
        color: #f7a81e;
        text-decoration: none;
    }  
    
    &:not(:last-of-type){
        margin-right: 3.3em;  color: #f7a81e;
        border-bottom-color: #f7a81e;
    }
    &:last-of-type {
        color: #909090;
    }
`;

export default BetslipHeadTab;