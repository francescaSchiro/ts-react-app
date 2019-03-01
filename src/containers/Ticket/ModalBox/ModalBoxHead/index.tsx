import * as React from 'react';

import Wrapper from './Wrapper';
import Title from './Title';
// import Close from './Close';
import NavLinkStyled from '../NavLinkStyled';


const ModalBoxHead = () => (
    <Wrapper>
        <Title> Valencia - Real Betis </Title>

        {/* <Close> */}
        <NavLinkStyled to={'/sistema/'} > Chiudi </NavLinkStyled>
        {/* </Close> */}
    </Wrapper>
);

export default ModalBoxHead;