import * as React from 'react';

import Wrapper from './Wrapper';
import Title from './Title';
import Close from './Close';

interface IModalBoxHead {
    onChiudiClick: () => void,
}

const ModalBoxHead = (props: IModalBoxHead) => (
    <Wrapper>
        <Title> Valencia - Real Betis </Title>
        <Close onClick={props.onChiudiClick} > Chiudi </Close>
    </Wrapper>
);

export default ModalBoxHead;