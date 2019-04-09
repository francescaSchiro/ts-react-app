import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const TicketButtons: React.FC = () => (
    <Wrapper>
        <Button success={true}>prenota</Button>
        <Button>scommetti</Button>
    </Wrapper>
);


interface MyProps {
    success?: boolean;
}

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% /2);
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: inset 0 - 1px rgba(0, 0, 0, .2);
    background-color: ${(props: MyProps) => props.success ? '#3B914C' : '#f7a81e'};
    color: ${(props: MyProps) => props.success ? '#fff' : '#393939;'};
`

export default TicketButtons;

// {!props.isLogged &&
//   <Button success={true}>prenota</Button> 
// }