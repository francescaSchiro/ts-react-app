import styled from 'src/theme/default/index';

const Overlay = styled.div`
    margin: 0;
    padding:0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.75);
    z-index:100;
`

export default Overlay;