import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipDevelopItem from './BetslipDevelopItem';



const BetslipDevelop = () => (
    <Wrapper>
        <BetslipDevelopItem infoToggle={false} />
        <BetslipDevelopItem infoToggle={true} />
        <BetslipDevelopItem infoToggle={false} />
    </Wrapper>
);

export default BetslipDevelop;