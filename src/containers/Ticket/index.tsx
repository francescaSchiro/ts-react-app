import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import BetslipBody from './BetslipBody';
import SettingsDefaultBlock from './SettingsDefaultBlock';

const Ticket = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody />
        <SettingsDefaultBlock />
    </Wrapper>
);

export default Ticket;