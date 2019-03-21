import * as React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderLogo from 'src/components/HeaderLogo';
import HeaderLoginBtn from 'src/components/HeaderLoginBtn';
import HeaderTicketBtn from 'src/components/HeaderTicketBtn';
import HeaderHamburger from 'src/components/HeaderHamburger';
import HeaderBalance from 'src/components/HeaderBalance';
import LoginModal from 'src/components/LoginModal/';

import Wrapper from './Wrapper';


interface OwnProps {
  balance: number,
  betsCount: number,
  isLoginOpen: boolean,
  isLogged: boolean,
}

const Header: React.FC<OwnProps> = ({ balance, betsCount, isLogged, isLoginOpen }) => (
  <Wrapper>
    <NavLink exact={true} to='/'>
      <HeaderLogo />
    </NavLink>
    <div style={{ display: 'flex' }}>
      {isLogged
        ? <HeaderBalance balance={balance} />
        : <HeaderLoginBtn isLoginOpen={isLoginOpen} />
      }
      <NavLink to='/ticket'>
        <HeaderTicketBtn betsCount={betsCount} />
      </NavLink>
      <HeaderHamburger />
    </div>
    {isLoginOpen &&
      <LoginModal />
    }
  </Wrapper >
);

export default Header;
