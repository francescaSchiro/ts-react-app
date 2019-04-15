import * as React from 'react';
import styled from 'src/theme/default/index';

import TicketStakeSingMult from 'src/components/TicketStakeSingMult';
import TicketKeypad from 'src/components/TicketKeypad';
import TicketDevelopSistema from 'src/components/TicketDevelopSistema';


import Wrapper from './Wrapper';


interface Props {
    onImportClick: () => void,
    showKeypad: boolean,
    sistema: boolean,
};

const TicketFooter: React.FC<Props> = ({ onImportClick, showKeypad, sistema }) => (
    <Wrapper>
        {sistema
            ? <TicketDevelopSistema />
            :
            <TicketStakeSingMult onImportClick={onImportClick} />
        }

        {showKeypad && <TicketKeypad sistema={sistema} />}

        <RowWrapper>
            <Column>
                <Label>{sistema ? 'Puntata' : 'Quota totale'}</Label>
                <Value>{sistema ? '€ 28,00' : '2,70'}</Value>
            </Column>
            <Column>
                <Label>{sistema ? 'Vincita minima' : 'Bonus multipla'}</Label>
                <Value>{sistema ? '€ 3,48' : '€ 0,00'}</Value>
            </Column>
            <Column>
                <Label>Vincita potenziale</Label>
                <Value>{sistema ? '€ 597,50' : '€ 8,10'}</Value>
            </Column>
        </RowWrapper>
    </Wrapper >
);

const Column = styled.div`
    width: calc(100% / 3);
    padding: 5px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Label = styled.div`
    box-sizing: border-box;
    padding-bottom: 5px;
    font-size: 11px;
    color: #bbb;
`;
const Value = styled.div`
    font-size: 11px;
    color: #fafafa;
    font-weight: bold;
`;
const RowWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 12px;
    background-color: #393939;   
`;


export default TicketFooter;