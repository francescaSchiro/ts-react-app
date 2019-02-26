import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import BetslipBody from './BetslipBody';
import SettingsDefaultBlock from './SettingsDefaultBlock';
import BetslipFooter from './BetslipFooter';
import Buttons from './Buttons';

const Ticket = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody />
        <SettingsDefaultBlock />
        <BetslipFooter />
        <Buttons />
    </Wrapper>
);

export default Ticket;