import styled from '../../theme/default/index';

 // section as in https://codepen.io/maxakohler/pen/pZoNGy and https://css-tricks.com/practical-css-scroll-snapping/

const BannerWrapper = styled.div`
display: inline-block;
  background-color: lightgreen;
  height: 320px;
  width: 70%;
  /* margin: 12px 0 12px 12px; */
  border-width: 12px 0 12px 12px;
  border-style: solid;
  border-color: red;



  scroll-snap-align: start;
	text-align: center;

& > h1 {
  color:red;
  }

&:last-child {
    margin-right: 30%;
  }
`;

export default BannerWrapper;
