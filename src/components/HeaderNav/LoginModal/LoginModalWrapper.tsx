import styled from 'src/theme/default/index';

interface ILoginModalWrapper {
  showModal: boolean;
}

const LoginModalWrapper = styled.div`
  position: fixed;
  top:0;
  left:0;
  margin-top:45px;
  width: 100%;
  height:100%;
  display: ${(props: ILoginModalWrapper) => (props.showModal ? 'block' : 'none')};
  
  background-color: red;
  z-index: 7000;
  
`;

export default LoginModalWrapper;
