import * as React from 'react';

import Overlay from './Overlay';
import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxHead from './ModalBoxHead';
import ModalBoxBody from './ModalBoxBody';
import ClusterSlider from './ClusterSlider';



const ModalBox = () => (
    <Overlay>
        <ModalBoxContainer>
            <ModalBoxHead />
            <ModalBoxBody />
            <ClusterSlider />
        </ModalBoxContainer>
    </Overlay>
);

export default ModalBox;