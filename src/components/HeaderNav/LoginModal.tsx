import styled from '../../theme/default/index';

interface MyProps {
  showModal: boolean;
}

const LoginModal = styled.div`
  position: fixed;
  z-index: 1000;
  top:0;
  left:0;
  margin-top:45px;
  width: 100%;
  height:100%;
  display: ${(props: MyProps) => (props.showModal ? 'block' : 'none')};
  
  background-color: red;
`;

export default LoginModal;
