import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from './Wrapper';
import Logo from './Logo';
import DropDownLogin from './DropDownLogin';
import BigliettoNav from './BigliettoNav';
import HamburgerNav from './HamburgerNav';
import NavActionsWrapper from './NavActionsWrapper';
import LoginModal from './LoginModal/';
import HeaderBalance from './HeaderBalance';

interface IHeaderState {
  showLoginModal: boolean,
  isLogged: boolean,
}
interface IHeaderProps {
  balance?: number,
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  public state = { showLoginModal: false, isLogged: false };

  public render() {
    const { showLoginModal, isLogged } = this.state;
    const { balance } = this.props;
    return (
      <Wrapper>
        <NavLink exact={true} to='/'>
          <Logo src='https://m.sisal.it/scommesse-matchpoint/content/img/logo.png?v=2.6.8' />
        </NavLink>

        <NavActionsWrapper>
          {isLogged
            ? <HeaderBalance>Balance: €{balance}</HeaderBalance>
            : <DropDownLogin
              onClick={this.toggleShowLoginModal}
              showModal={showLoginModal}
            > Accedi
            </DropDownLogin>
          }


          <NavLink to='/ticket'>
            <BigliettoNav />
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
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };
}

export default Header;
