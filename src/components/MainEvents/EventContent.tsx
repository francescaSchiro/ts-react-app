import styled from '../../theme/default/index';

const EventContent = styled.div`
  width: auto;
  height: 98px;
  margin: 10px;
  background-color: yellow;
  /* box-shadow: 1px 1px 2px 0 rgba(0,0,0,.28); */

  display: grid;
  grid-gap: 4px;
  grid-template: 31px 14px 48px / 1fr 1fr 2fr 2fr 1.5fr;
  font-size: 0.9em;
  position: relative;
  /* events separator line */

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;

    height: 100%;
    width: 100vw;
    border-bottom: 1px solid lightgray;
  }
`;

export default EventContent;
