import * as React from 'react';


import BetslipDevelopWrapper from './BetslipDevelopWrapper';
import BetslipDevelopItemWrapper from './BetslipDevelopItemWrapper';
import IconEye from './IconEye';
import RowWrapper from './RowWrapper';
import StakeAction from './StakeAction';
import StakeImport from './StakeImport';
import NumberArrowWrapper from './NumberArrowWrapper';
import ArrowDown from './ArrowDown';
import DevelopNumber from './DevelopNumber';
import BetslipDevelopItemInfo from './BetslipDevelopItemInfo';

interface IBetslipDevelopItem {
    infoToggle?: boolean;
}

const BetslipDevelopItem = (props: IBetslipDevelopItem) => (
    <BetslipDevelopWrapper>

        <BetslipDevelopItemWrapper>
            <IconEye />
            <RowWrapper>
                <StakeAction>-</StakeAction>
                <StakeImport>€ 3,00</StakeImport>
                <StakeAction>+</StakeAction>
            </RowWrapper>

            <NumberArrowWrapper>
                <DevelopNumber>x1</DevelopNumber>
                <ArrowDown infoToggle={props.infoToggle} />
            </NumberArrowWrapper>
        </BetslipDevelopItemWrapper>
        {props.infoToggle && <BetslipDevelopItemInfo />}


    </BetslipDevelopWrapper>
);

export default BetslipDevelopItem;