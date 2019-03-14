import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from './Wrapper';
import HeaderLogo from 'src/components/HeaderLogo';
import HeaderLoginBtn from 'src/components/HeaderLoginBtn';
import HeaderTicketBtn from 'src/components/HeaderTicketBtn';
import HeaderHamburger from 'src/components/HeaderHamburger';
import HeaderBalance from 'src/components/HeaderBalance';
import LoginModal from 'src/components/LoginModal/';

interface IHeaderState {
  isLoginOpen: boolean,
  isLogged: boolean,
  balance: number | string | null | undefined,
  betsCount: number | null | undefined | string,
}

class Header extends React.Component<{}, IHeaderState> {
  public state = {
    isLoginOpen: false,
    isLogged: false,
    balance: '8.441,62',
    betsCount: 3
  };

  public render() {
    const { isLoginOpen, isLogged, balance, betsCount } = this.state;
    return (
      <Wrapper>
        <NavLink exact={true} to='/'>
          <HeaderLogo />
        </NavLink>

        <div style={{ display: 'flex' }}>
          {isLogged
            ? <HeaderBalance onClick={this.toggleShowLoginModal} balance={balance} />
            : <HeaderLoginBtn onClick={this.toggleShowLoginModal} showModal={isLoginOpen} />
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
  }

  private toggleShowLoginModal = () => {
    this.setState({ isLoginOpen: !this.state.isLoginOpen, isLogged: !this.state.isLogged });
  };
}

export default Header;