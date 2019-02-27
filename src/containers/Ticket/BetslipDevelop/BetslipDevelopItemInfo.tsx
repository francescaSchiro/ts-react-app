import * as React from 'react';

import BetslipDevelopItemInfoWrapper from './BetslipDevelopItemInfoWrapper';
import InfoColumnWrapper from './InfoColumnWrapper';
import RowLeft from './RowLeft';
import RowRight from './RowRight';



const BetslipDevelopItemInfo = () => (
    <BetslipDevelopItemInfoWrapper>

        <InfoColumnWrapper>
            <RowLeft>Costo totale</RowLeft>
            <RowLeft>Vincita minima</RowLeft>
            <RowLeft>Vincita massima</RowLeft>
        </InfoColumnWrapper>

        <InfoColumnWrapper>
            <RowRight>€ 20,00</RowRight>
            <RowRight>€ 12,50</RowRight>
            <RowRight>€ 228,00</RowRight>
        </InfoColumnWrapper>

    </BetslipDevelopItemInfoWrapper>
);

export default BetslipDevelopItemInfo;