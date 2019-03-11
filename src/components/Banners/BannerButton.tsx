import styled from '../../theme/default/index';

// section as in https://codepen.io/maxakohler/pen/pZoNGy and https://css-tricks.com/practical-css-scroll-snapping/

const BannerButton = styled.button`
  padding: 10px;
  width:calc(100% - 20px);
  /* flex: 1; */
  font-size: 14px;
  color: #393939;
  font-weight: 700;
  border: 1px solid #585858;
  border-radius: 2px;
  background-color:white;
  position: absolute;
  bottom: 10px;
`;

export default BannerButton;
