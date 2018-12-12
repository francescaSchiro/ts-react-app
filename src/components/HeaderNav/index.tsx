import * as React from 'react';

import HeaderNavWrapper from './Wrapper';
import Logo from './Logo';
import DropDownLogin from './DropDownLogin';
import BigliettoNav from './BigliettoNav';
import HamburgerNav from './HamburgerNav';
import NavActionsWrapper from './NavActionsWrapper';

const HeaderNav = () => (
  <HeaderNavWrapper>
    <Logo src='https://m.sisal.it/scommesse-matchpoint/content/img/logo.png?v=2.5.5' />
    <NavActionsWrapper>
      <DropDownLogin>Accedi</DropDownLogin>
      <BigliettoNav />
      <HamburgerNav/>
  </NavActionsWrapper>
    {/* <Sidebar /> */}
  </HeaderNavWrapper>
);

export default HeaderNav;
