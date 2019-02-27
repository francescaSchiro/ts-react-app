import styled from 'src/theme/default/index';

interface IInfoAlert {
    error?: boolean;
}

const InfoAlert = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    background-color: ${(props: IInfoAlert) => props.error ? '#D82600' : '#f7a81e'};
    color: #fff;
    padding: 6px 12px;
    font-size: 11px;

`;

export default InfoAlert;