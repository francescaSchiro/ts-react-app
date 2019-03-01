import * as React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderNavWrapper from './Wrapper';
import Logo from './Logo';
import DropDownLogin from './DropDownLogin';
import BigliettoNav from './BigliettoNav';
import HamburgerNav from './HamburgerNav';
import NavActionsWrapper from './NavActionsWrapper';
import LoginModal from './LoginModal/';

class HeaderNav extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { showLoginModal: false };
  }

  public render() {
    return (
      <HeaderNavWrapper>
        <NavLink exact={true} to='/'>
          <Logo src='https://m.sisal.it/scommesse-matchpoint/content/img/logo.png?v=2.6.8' />
        </NavLink>

        <NavActionsWrapper>
          <DropDownLogin
            name='toggleLoginModal'
            onClick={this.toggleShowLoginModal}
            showModal={this.state.showLoginModal}

          >
            Accedi
          </DropDownLogin>

          <NavLink to='/ticket'>
            <BigliettoNav />
          </NavLink>
          <HamburgerNav />
        </NavActionsWrapper>
        <LoginModal id={'login-modal'} showModal={this.state.showLoginModal} />
        {/* <Sidebar /> */}
      </HeaderNavWrapper >
    );
  }

  private toggleShowLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };
}

export default HeaderNav;
