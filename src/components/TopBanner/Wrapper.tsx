import styled from 'src/theme/default/index';

interface IWrapper {
    imgUrl: string
}

const Wrapper = styled.div`
    position: relative;

    width: 100%;
    height: 115px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    
    background-image: url(${(props: IWrapper) => props.imgUrl});
    background-repeat: no-repeat;
    background-position: left center ;
    background-size: cover;
`;

export default Wrapper;
