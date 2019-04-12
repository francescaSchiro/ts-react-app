import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';

const TicketFooterRow = () => (
    <Wrapper>
        <Column>
            <Label>Puntata</Label>
            <Value>€ 28,00</Value>
        </Column>
        <Column>
            <Label>Vincita minima</Label>
            <Value>€ 3,48</Value>
        </Column>
        <Column>
            <Label>Vincita potenziale</Label>
            <Value>€ 597,50</Value>
        </Column>
    </Wrapper>
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

export default TicketFooterRow;