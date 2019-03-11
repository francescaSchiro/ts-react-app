import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipDevelopItem from './BetslipDevelopItem';
import BetslipKeypad from '../BetslipKeypad';



const BetslipDevelop = () => (
    <Wrapper>
        <BetslipDevelopItem infoToggle={false} />
        <BetslipDevelopItem infoToggle={true} />
        <BetslipDevelopItem infoToggle={false} />
        <BetslipKeypad sistema={true} />
    </Wrapper>
);

export default BetslipDevelop;