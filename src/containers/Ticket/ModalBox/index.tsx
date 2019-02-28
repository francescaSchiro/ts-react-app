import * as React from 'react';

import Overlay from './Overlay';
import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxHead from './ModalBoxHead';



const ModalBox = () => (
    <Overlay>
        <ModalBoxContainer>
            <ModalBoxHead />
        </ModalBoxContainer>
    </Overlay>
);

export default ModalBox;