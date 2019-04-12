import styled from 'src/theme/default/index';

interface Props {
    error?: boolean;
};

const Wrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    background-color: ${(props: Props) => props.error ? '#D82600' : '#f7a81e'};
    color: #fff;
    padding: 6px 12px;
    font-size: 11px;
`;

export default Wrapper;