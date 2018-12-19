import styled from '../../theme/default/index';

// slider as in https://codepen.io/maxakohler/pen/pZoNGy and https://css-tricks.com/practical-css-scroll-snapping/

const BannerCarouselWrapper = styled.ul`
  display: block;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;

  scroll-snap-type: mandatory;
	scroll-snap-points-x: repeat(100vw);
  /* scroll-snap-points-y: repeat(70%); */
	scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    display: none;
  }



  background-color: #eaeaea;
`;
export default BannerCarouselWrapper;
