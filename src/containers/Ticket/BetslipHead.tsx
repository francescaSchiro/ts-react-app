import * as React from 'react';

import BetslipHeadWrapper from './BetslipHeadWrapper';
import BetslipHeadTabs from './BetslipHeadTabs';
import BetslipHeadBack from './BetslipHeadBack';
import NavLinkStyled from './NavLinkStyled';

interface IBetslipHead {
    empty?: boolean
}

const BetslipHead = (props: IBetslipHead) => (
    <BetslipHeadWrapper>
        <BetslipHeadTabs>

            {props.empty ?
                <NavLinkStyled to={'/sistema/'} activeStyle={{ color: '#f7a81e', borderBottomColor: '#f7a81e' }}>
                    IL TUO BIGLIETTO È VUOTO
            </NavLinkStyled> :
                <>
                    <NavLinkStyled to={'/multipla/'} activeStyle={{ color: '#f7a81e', borderBottomColor: '#f7a81e' }}>
                        MULTIPLA
             </NavLinkStyled>
                    <NavLinkStyled to={'/sistema/'} activeStyle={{ color: '#f7a81e', borderColor: '#f7a81e' }}>
                        SISTEMA
             </NavLinkStyled>
                </>
            }

        </BetslipHeadTabs>
        <BetslipHeadBack> Chiudi </BetslipHeadBack>
    </BetslipHeadWrapper>
);

export default BetslipHead;