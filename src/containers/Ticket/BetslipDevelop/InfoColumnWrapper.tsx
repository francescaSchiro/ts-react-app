import styled from 'src/theme/default/index';

const InfoColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
    flex-grow:1;

    & > * {
        margin-bottom: 3px;
    }
    & > :first-child {

        color: #fff;
        margin-bottom: 5px;
    }
`

export default InfoColumnWrapper;