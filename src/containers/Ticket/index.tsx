import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import BetslipBody from './BetslipBody';
import SettingsDefaultBlock from './SettingsDefaultBlock';
import BetslipFooter from './BetslipFooter';

const Ticket = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody />
        <SettingsDefaultBlock />
        <BetslipFooter />
    </Wrapper>
);

export default Ticket;