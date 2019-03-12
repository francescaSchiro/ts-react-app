import * as React from 'react';

import Overlay from './Overlay';
import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxHead from './ModalBoxHead';
import ModalBoxBody from './ModalBoxBody';
import ClusterSlider from './ClusterSlider';
import ClusterChange from './ClusterChange';
import GameList from './GameList';


const ModalBox = () => (
    <Overlay>
        <ModalBoxContainer>
            <ModalBoxHead />
            <ModalBoxBody />
            <ClusterSlider />
            <ClusterChange />
            <GameList />
        </ModalBoxContainer>
    </Overlay>
);

export default ModalBox;