import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import Buttons from './Buttons';
import BetslipBody from './BetslipBody';


const Sistema = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody />
        <Buttons />
    </Wrapper>
);

export default Sistema;