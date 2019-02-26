import styled from 'src/theme/default/index';


const BetslipHeadTab = styled.div`
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items:flex-end;
    text-transform: uppercase;
    color: #909090;
    z-index:1;

    
    &:not(:last-of-type){
        margin-right: 3.3em;
      
        /* border-bottom-color: #f7a81e; */
    }
    /* &:last-of-type {
        color: #909090;
    } */
`;

export default BetslipHeadTab;