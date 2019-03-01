import styled from '../../theme/default/index';

const EventLeague = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 25px;
  padding: 0 .5em;
  

  /* border: 2px solid #f6a81e; */
  background-color: #989898;
  color: #fff;

  &::before {
    content: '';
    background-image: url('http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png');
    width: 20px;
    height: 20px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    
    margin-right: 0.5em;
  }
`;

export default EventLeague;
