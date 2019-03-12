import * as React from 'react';

import Wrapper from './Wrapper';
import Column from './Column';
import Label from './Label';
import Value from './Value';
import RowWrapper from './RowWrapper';
import StakeAction from './StakeAction';
import StakeImport from './StakeImport';
import BetslipKeypad from '../BetslipKeypad';

interface IBetslipFooter {
    onImportClick: () => void,
    showKeypad: boolean,

}

const BetslipFooter = (props: IBetslipFooter) => (
    <Wrapper>

        <RowWrapper>
            <StakeAction>-</StakeAction>
            <StakeImport onClick={props.onImportClick}>€ 3,00</StakeImport>
            <StakeAction>+</StakeAction>
        </RowWrapper>
        {props.showKeypad && <BetslipKeypad />}
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