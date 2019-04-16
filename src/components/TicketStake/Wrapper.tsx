import styled from 'src/theme/default/index';


interface IPropsWrapper {
    sistema?: boolean,
}

const Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props: IPropsWrapper) => props.sistema ? 'transparent' : '#393939'};   
`;

export default Wrapper;