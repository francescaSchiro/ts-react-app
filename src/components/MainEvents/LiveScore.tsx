import styled from '../../theme/default/index';

const LiveScore = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: black;
  background-color: #f7a81e;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.5em;
  position: relative;

  &::after {
    position: absolute;
    content: '1°T';
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: .8em;
    line-height: 1.5em;
    width: 100%;
    height: 46%;
    top: 54%;
    color: white;
    background-color: black;
  }
`;

export default LiveScore;
