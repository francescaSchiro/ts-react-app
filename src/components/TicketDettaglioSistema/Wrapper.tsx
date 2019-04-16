import styled from 'src/theme/default/index';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% + 12px);
    height: 100%;
    position: absolute;
    top: 0;
    left: -12px; /*Iconeye left padding*/
    background: rgba(0,0,0,.94);
    z-index: 8000;
    color: white;
`;

export default Wrapper;