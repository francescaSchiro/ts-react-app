import styled from '../../theme/default/index';

interface MyProps {
  active: boolean
}

const Tab = styled.div`
border-top: ${(props:MyProps) => props.active ?  '5px solid #0C468D' : '5px solid #cbcbcb'};
display:flex;
justify-content: center;
align-items: center;
flex:1;
font-size:1.1em;
font-weight: 600;
color:  ${(props:MyProps) => props.active ?  'black' : '#777'};
background-color: ${(props:MyProps) => props.active ?  'white' : 'transparent'};


  /* border-top: 5px solid #cbcbcb;
  background: #e1e1e1 */
`;

export default Tab;
