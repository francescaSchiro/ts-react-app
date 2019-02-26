import * as React from 'react';

import Wrapper from './Wrapper';
import RowWrapper from './RowWrapper';
import StakeAction from './StakeAction';
import StakeImport from './StakeImport';
import Column from './Column';
import Label from './Label';
import Value from './Value';



const BetslipFooter = () => (
    <Wrapper>

        <RowWrapper>
            <StakeAction>-</StakeAction>
            <StakeImport>€ 3,00</StakeImport>
            <StakeAction>+</StakeAction>
        </RowWrapper>

        <RowWrapper>
            <Column>
                <Label>Quota totale</Label>
                <Value>2,70</Value>
            </Column>
            <Column>
                <Label>Bonus multipla</Label>
                <Value>€ 0,00</Value>
            </Column>
            <Column>
                <Label>Vincita potenziale</Label>
                <Value>€ 8,10</Value>
            </Column>
        </RowWrapper>

    </Wrapper>
);

export default BetslipFooter;