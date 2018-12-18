import * as React from 'react';

import HeaderNavWrapper from './Wrapper';
import Logo from './Logo';
import DropDownLogin from './DropDownLogin';
import BigliettoNav from './BigliettoNav';
import HamburgerNav from './HamburgerNav';
import NavActionsWrapper from './NavActionsWrapper';
import LoginModal from './LoginModal';

class HeaderNav extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { showLoginModal: false };
  }

  public render() {
    return (
      <HeaderNavWrapper>
        <Logo src='https://m.sisal.it/scommesse-matchpoint/content/img/logo.png?v=2.5.5' />
        <NavActionsWrapper>
          <DropDownLogin
            name='toggleLoginModal'
            onClick={this.toggleShowLoginModal}
          >
            Accedi
          </DropDownLogin>
          
          <BigliettoNav />
          <HamburgerNav />
        </NavActionsWrapper>
        <LoginModal id={'login-modal'} showModal={this.state.showLoginModal} />
        {/* <Sidebar /> */}
      </HeaderNavWrapper>
    );
  }

  private toggleShowLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };
}

export default HeaderNav;
