import styled from '../../theme/default/index';

const EventLeague = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 25px;
  width: 100%;
  padding: 0 .5em;
  

  /* border: 2px solid #f6a81e; */
  background-color: #989898;
  color: #fff;

  &::before {
    content: '';
    background-image: url(https://m.sisal.it/scommesse-matchpoint/content/img/icon_sport/1.png?v=2.5.6);
    width: 15px;
    height: 15px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    
    margin-right: 0.5em;
  }
`;

export default EventLeague;
