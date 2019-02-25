import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import BetslipBody from './BetslipBody';

const Ticket = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody />
        <BetslipBody />
    </Wrapper>
);

export default Ticket;