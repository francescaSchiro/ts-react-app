import styled from 'src/theme/default/index';

const ModalBoxContainer = styled.div`
    overflow: auto;
    max-height: 80%;
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 600px;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid #fff;

    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
    transform: translate(-50%,-50%);
    z-index: 9000;
`

export default ModalBoxContainer;