import * as React from 'react';

import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxHead from './ModalBoxHead';
import ModalBoxBody from './ModalBoxBody';
import ClusterSlider from './ClusterSlider';
import ClusterChange from './ClusterChange';
import GameList from './GameList';

interface IModalBox {
    onChiudiClick: () => void,
}

const ModalBox = (props: IModalBox) => (
    <ModalBoxContainer>
        <ModalBoxHead onChiudiClick={props.onChiudiClick} />
        <ModalBoxBody />
        <ClusterSlider />
        <ClusterChange />
        <GameList />
    </ModalBoxContainer>
);

export default ModalBox;