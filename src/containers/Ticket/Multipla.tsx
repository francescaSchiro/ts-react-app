import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipBody from './BetslipBody';
import BetslipHead from './BetslipHead';
import SettingsDefaultBlock from './SettingsDefaultBlock';
import BetslipFooter from './BetslipFooter';
import Buttons from './Buttons';

const Multipla = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody />
        <SettingsDefaultBlock />
        <BetslipFooter />
        <Buttons />
    </Wrapper>
);

export default Multipla;