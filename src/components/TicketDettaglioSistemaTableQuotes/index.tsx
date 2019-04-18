import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const TicketDettaglioSistemaTableQuotes: React.FC = () => (
    <Wrapper>
        <TRQuote>
            <TDQuote>1</TDQuote>
            <TDQuote>2</TDQuote>
            <TDQuote>3</TDQuote>
            <TDQuote>4</TDQuote>
            <TDQuote>QUota</TDQuote>
            <TDQuote>puntata</TDQuote>
            <TDQuote>vincita</TDQuote>
        </TRQuote>
        <TRQuote>
            <TDQuote><Dot /></TDQuote>
            <TDQuote />
            <TDQuote><Dot /></TDQuote>
            <TDQuote />
            <TDQuote>2.63</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
        </TRQuote>
        <TRQuote>
            <TDQuote />
            <TDQuote><Dot /></TDQuote>
            <TDQuote><Dot /></TDQuote>
            <TDQuote />
            <TDQuote>22.33</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
        </TRQuote>
        <TRQuote>
            <TDQuote><Dot /></TDQuote>
            <TDQuote />
            <TDQuote />
            <TDQuote><Dot /></TDQuote>
            <TDQuote>1.36</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
        </TRQuote>
        <TRQuote>
            <TDQuote />
            <TDQuote><Dot /></TDQuote>
            <TDQuote />
            <TDQuote><Dot /></TDQuote>
            <TDQuote>11.55</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
        </TRQuote>
        <TRQuote>
            <TDQuote />
            <TDQuote />
            <TDQuote><Dot /></TDQuote>
            <TDQuote><Dot /></TDQuote>
            <TDQuote>2.13</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
            <TDQuote>€ 0,00</TDQuote>
        </TRQuote>
    </Wrapper>
);

const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #989898;
`;

const TDQuote = styled.td`
    border-left: 1px solid #eaeaea;
    padding: 0 8px;
    min-width: 16px;
    height: 35px;
    min-height: 35px;
    text-align: left;
    vertical-align: middle;

    &:nth-child(-n+4) {
        width: 10%;
    };
    &:nth-child(5) {
       width: 20%;
    };
    &:nth-child(6) {
       width: 20%;
    };
    &:nth-child(7) {
       width: 25%;
       border-right: 1px solid #eaeaea;
    };
`;

const TRQuote = styled.tr`
    height: 35px;
    min-height: 35px;
    color: #393939;
    border-bottom: 1px solid #eaeaea;
    font-family: 'Roboto', sans-serif;
    background-color: white;
    &:first-child {
        background: #eaeaea;
        font-weight: bold;
        font-size: 11px;
        text-transform: uppercase;
    };
`;


export default TicketDettaglioSistemaTableQuotes;