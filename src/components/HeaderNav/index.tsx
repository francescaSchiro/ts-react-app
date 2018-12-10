import * as React from 'react';

import HeaderNavWrapper from './Wrapper';
import Logo from './Logo';
import DropDownLogin from './DropDownLogin';
import BigliettoNav from './BigliettoNav';
import HamburgerNav from './HamburgerNav';

const HeaderNav = () => (
  <HeaderNavWrapper>
    <Logo>Logo</Logo>
    <DropDownLogin>Drop &darr;</DropDownLogin>
    <BigliettoNav>Bigl </BigliettoNav>
    <HamburgerNav>/ / /</HamburgerNav>
    {/* <Sidebar /> */}
  </HeaderNavWrapper>
);

export default HeaderNav;
