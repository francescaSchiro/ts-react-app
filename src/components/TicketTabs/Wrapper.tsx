import styled from 'src/theme/default/index';


const Wrapper = styled.div`
    position:fixed;
    height:42px; /*same as BetslipBody padding-top*/
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: #222;
    border-bottom: 3px solid #f7a81e;
    color: white;
    font-size: 12px;
    z-index: 1000;
`;
export default Wrapper;