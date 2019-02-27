import * as React from 'react';

import Wrapper from './Wrapper';
import IconEye from './IconEye';
import RowWrapper from './RowWrapper';
import StakeAction from './StakeAction';
import StakeImport from './StakeImport';
import NumberArrowWrapper from './NumberArrowWrapper';
import ArrowDown from './ArrowDown';
import DevelopNumber from './DevelopNumber';



const BetslipDevelop = () => (
    <Wrapper>
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

    </Wrapper>
);

export default BetslipDevelop;