import * as React from 'react';
import styled from 'src/theme/default/index';

import { ISviluppoSistemaExt } from 'src/models/ISviluppoSistemaExt';

import Wrapper from './Wrapper';

interface Props {
    content: ISviluppoSistemaExt,
};

const TicketDettaglioSistemaTableQuotes: React.FC<Props> = ({ content }) => {
    const { singoloSviluppoList } = content;
    return (
        <Wrapper>
            <TRQuote>
                <TDQuote>1</TDQuote>
                <TDQuote>2</TDQuote>
                <TDQuote>3</TDQuote>
                <TDQuote>4</TDQuote>
                <TDQuote>QUOTA</TDQuote>
                <TDQuote>PUNTATA</TDQuote>
                <TDQuote>VINCITA</TDQuote>
            </TRQuote>
            <TRQuote>
                <TDQuote><Dot /></TDQuote>
                <TDQuote />
                <TDQuote><Dot /></TDQuote>
                <TDQuote><Dot /></TDQuote>
                <TDQuote>{singoloSviluppoList[0].quotaTotale / 100}</TDQuote>
                <TDQuote>€ {(singoloSviluppoList[0].importo / 100).toFixed(2).replace('.', ',')}</TDQuote>
                <TDQuote>€ {(singoloSviluppoList[0].importoVincita / 100).toFixed(2).replace('.', ',')}</TDQuote>
            </TRQuote>
            <TRQuote>
                <TDQuote />
                <TDQuote><Dot /></TDQuote>
                <TDQuote><Dot /></TDQuote>
                <TDQuote><Dot /></TDQuote>
                <TDQuote>{singoloSviluppoList[1].quotaTotale / 100}</TDQuote>
                <TDQuote>€ {(singoloSviluppoList[1].importo / 100).toFixed(2).replace('.', ',')}</TDQuote>
                <TDQuote>€ {(singoloSviluppoList[1].importoVincita / 100).toFixed(2).replace('.', ',')}</TDQuote>
            </TRQuote>
        </Wrapper>
    );
};

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
        text-align:center;
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