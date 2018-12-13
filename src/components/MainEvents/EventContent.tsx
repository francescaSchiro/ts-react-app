import styled from '../../theme/default/index';

const EventContent = styled.div`
  width: auto;
  height: 98px;
  margin: 10px;
  background-color: yellow;
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
    height: 1px;
    width: 100vw;
    background-color: lightgray;
  }
`;

export default EventContent;
