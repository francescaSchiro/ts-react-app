import styled from 'src/theme/default/index';

const FixedCheckbox = styled.input`
    position: absolute;
    top:16px;
    left:0;
    height:0;
    width:0;


    &::after {
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


    }
`
export default FixedCheckbox;
// display: flex;
// justify-content: center;
// align-items: center;
// height:16px;
// width: 16px;
// font-weight:bold;
// color: #fff;
// border: 2px solid #909090;
// border-radius: 0 0 2px 2px ;
// opacity:1;