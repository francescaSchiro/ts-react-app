import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from './Wrapper';
import HeaderLogo from './HeaderLogo';
import HeaderLoginBtn from 'src/components/HeaderLoginBtn';
import HeaderTicketBtn from 'src/components/HeaderTicketBtn';
import HamburgerNav from './HamburgerNav';
import NavActionsWrapper from './NavActionsWrapper';
import LoginModal from './LoginModal/';
import HeaderBalance from 'src/components/HeaderBalance';

interface IHeaderState {
  showLoginModal: boolean,
  isLogged: boolean,
  balance: number | string
  betsCount: number | null | undefined | string,
}
// interface IHeaderProps {
//   balance?: number | string,
// }

class Header extends React.Component<{}, IHeaderState> {
  public state = { showLoginModal: false, isLogged: false, balance: '8.441,62', betsCount: 3 };

  public render() {
    const { showLoginModal, isLogged, balance, betsCount } = this.state;
    return (
      <Wrapper>
        <NavLink exact={true} to='/'>
          <HeaderLogo src='https://m.sisal.it/scommesse-matchpoint/content/img/logo.png?v=2.6.8' />
        </NavLink>

        <NavActionsWrapper>
          {isLogged
            ? <HeaderBalance onClick={this.toggleShowLoginModal} balance={balance} />
            : <HeaderLoginBtn onClick={this.toggleShowLoginModal} showModal={showLoginModal} />
          }
          <NavLink to='/ticket'>
            <HeaderTicketBtn betsCount={betsCount} />
          </NavLink>
          <HamburgerNav />
        </NavActionsWrapper>
        {showLoginModal &&
          <LoginModal />
        }
        {/* <Sidebar /> */}
      </Wrapper >
    );
  }

  private toggleShowLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal, isLogged: !this.state.isLogged });
  };
}

export default Header;
