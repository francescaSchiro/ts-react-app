import * as React from 'react';

import RowWrapper from './BetslipFooter/RowWrapper';
import Column from './BetslipFooter/Column';
import Label from './BetslipFooter/Label';
import Value from './BetslipFooter/Value';


const BetslipFooterRow = () => (
    <RowWrapper>
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
    </RowWrapper>
);

export default BetslipFooterRow;