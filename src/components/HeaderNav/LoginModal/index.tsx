import * as React from 'react';
import LoginModalWrapper from './LoginModalWrapper';

export interface ILoginModal {
  showModal: boolean;
  id?: string;
}

const LoginModal = (props: ILoginModal) => (

  <LoginModalWrapper showModal={props.showModal}>LoginModalWrapper</LoginModalWrapper>
);
export default LoginModal;
