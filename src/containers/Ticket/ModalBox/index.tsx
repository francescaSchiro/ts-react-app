import * as React from 'react';

import Overlay from './Overlay';
import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxHead from './ModalBoxHead';
import ModalBoxBody from './ModalBoxBody';



const ModalBox = () => (
    <Overlay>
        <ModalBoxContainer>
            <ModalBoxHead />
            <ModalBoxBody />
        </ModalBoxContainer>
    </Overlay>
);

export default ModalBox;