import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const TicketDevelopItemInfo = () => (
    <Wrapper>
        <InfoColumnWrapper>
            <RowLeft>Costo totale</RowLeft>
            <RowLeft>Vincita minima</RowLeft>
            <RowLeft>Vincita massima</RowLeft>
        </InfoColumnWrapper>
        <InfoColumnWrapper>
            <RowRight>€ 20,00</RowRight>
            <RowRight>€ 12,50</RowRight>
            <RowRight>€ 228,00</RowRight>
        </InfoColumnWrapper>
    </Wrapper>
);

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
`;
const RowLeft = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;  
    font-size: 10px;
`;
const RowRight = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;  
    font-size: 10px;
    text-align: right;
    padding-right: 26px;
`;

export default TicketDevelopItemInfo;