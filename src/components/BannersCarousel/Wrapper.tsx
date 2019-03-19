import styled from 'src/theme/default/index';

// slider as in https://codepen.io/maxakohler/pen/pZoNGy and https://css-tricks.com/practical-css-scroll-snapping/

const Wrapper = styled.ul`
  width: 100%;
  display: block;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  color: #393939;
  background-color: #eaeaea;

  scroll-snap-type: mandatory;
	scroll-snap-points-x: repeat(100vw);
  /* scroll-snap-points-y: repeat(70%); */
	scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default Wrapper;
