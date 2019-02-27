import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import Buttons from './Buttons';
import BetslipBody, { IBetslipBody } from './BetslipBody';
import SettingsDefaultBlock from './SettingsDefaultBlock';
import BetslipDevelop from './BetslipDevelop';


const Sistema: React.FC<IBetslipBody> = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody sistema={true} />
        <SettingsDefaultBlock />
        <BetslipDevelop />

        <Buttons />
    </Wrapper>
);

export default Sistema;