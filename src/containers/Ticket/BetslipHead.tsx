import * as React from 'react';
import styled from 'src/theme/default/index';
import { NavLink } from 'react-router-dom';

import BetslipHeadWrapper from './BetslipHeadWrapper';
import BetslipHeadTabs from './BetslipHeadTabs';
// import BetslipHeadTab from './BetslipHeadTab';
import BetslipHeadBack from './BetslipHeadBack';



const NavLinkStyled = styled(NavLink)`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #909090;
    text-decoration: none;
    height:100%;
    border-bottom: 3px solid #222; 
    z-index:1;
    text-transform: uppercase;

     
    &:not(:last-of-type){
        margin-right: 3.3em;
    }

`;

const BetslipHead = () => (

    <BetslipHeadWrapper>
        <BetslipHeadTabs>
            <NavLinkStyled to={'/ticket/'} activeStyle={{ color: '#f7a81e', borderBottomColor: '#f7a81e' }}>
                MULTIPLA
                </NavLinkStyled>
            <NavLinkStyled to={'/sistema/'} activeStyle={{ color: '#f7a81e', borderColor: '#f7a81e' }}>
                SISTEMA
                </NavLinkStyled>
        </BetslipHeadTabs>
        <BetslipHeadBack> Chiudi </BetslipHeadBack>
    </BetslipHeadWrapper>

);

export default BetslipHead;