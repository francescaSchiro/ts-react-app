import * as React from 'react';

import Wrapper from './Wrapper';
import RowWrapper from './RowWrapper';
import StakeAction from './StakeAction';
import StakeImport from './StakeImport';



const BetslipFooter = () => (
    <Wrapper>
        <RowWrapper>
            <StakeAction>-</StakeAction>
            <StakeImport>€ 3,00</StakeImport>
            <StakeAction>+</StakeAction>
        </RowWrapper>
    </Wrapper>
);

export default BetslipFooter;