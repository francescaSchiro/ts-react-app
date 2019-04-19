import styled from 'src/theme/default/index';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.94);
    z-index: 8000;
    color: white;

    position: fixed;
    overflow-y: hidden;
`;

export default Wrapper;