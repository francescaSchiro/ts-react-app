import * as React from 'react';

import BetslipDevelopItemWrapper from './BetslipDevelopItemWrapper';
import IconEye from './IconEye';
import RowWrapper from './RowWrapper';
import StakeAction from './StakeAction';
import StakeImport from './StakeImport';
import NumberArrowWrapper from './NumberArrowWrapper';
import ArrowDown from './ArrowDown';
import DevelopNumber from './DevelopNumber';



const BetslipDevelopItem = () => (
    <BetslipDevelopItemWrapper>
        <IconEye />

        <RowWrapper>
            <StakeAction>-</StakeAction>
            <StakeImport>€ 3,00</StakeImport>
            <StakeAction>+</StakeAction>
        </RowWrapper>

        <NumberArrowWrapper>
            <DevelopNumber>x1</DevelopNumber>
            <ArrowDown />
        </NumberArrowWrapper>

    </BetslipDevelopItemWrapper>
);

export default BetslipDevelopItem;