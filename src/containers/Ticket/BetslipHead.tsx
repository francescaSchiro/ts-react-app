import * as React from 'react';
import { NavLink } from 'react-router-dom';

import BetslipHeadWrapper from './BetslipHeadWrapper';
import BetslipHeadTabs from './BetslipHeadTabs';
import BetslipHeadTab from './BetslipHeadTab';
import BetslipHeadBack from './BetslipHeadBack';








const BetslipHead = () => (

    <BetslipHeadWrapper>
        <BetslipHeadTabs>
            <BetslipHeadTab>
                <NavLink to={'/ticket/'}>
                    MULTIPLA
                </NavLink>
            </BetslipHeadTab>
            <BetslipHeadTab>
                <NavLink to={'/sistema/'}>
                    SISTEMA
                </NavLink>
            </BetslipHeadTab>
        </BetslipHeadTabs>
        <BetslipHeadBack> Chiudi </BetslipHeadBack>
    </BetslipHeadWrapper>

);

export default BetslipHead;