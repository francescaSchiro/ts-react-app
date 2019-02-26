import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipBodyItem from './BetslipBodyItem';
import BetslipSubhead from './BetslipSubhead';


const BetslipBody = () => (
    <Wrapper>
        <BetslipSubhead> Cancella tutto </BetslipSubhead>
        <BetslipBodyItem />
        <BetslipBodyItem />
        <BetslipBodyItem />
    </Wrapper>
);

export default BetslipBody;