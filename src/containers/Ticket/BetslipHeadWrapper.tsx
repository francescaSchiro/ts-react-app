import styled from '../../theme/default/index';


const BetslipHeadWrapper = styled.div`
    position:fixed;
    height:42px; /*same as BetslipBody padding-top*/
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: #222;
    border-bottom: 3px solid #f7a81e;
    color: white;
    z-index: 2;
    font-size: 12px;
`;
export default BetslipHeadWrapper;