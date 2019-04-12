import * as React from 'react';
import styled from 'src/theme/default/index';

import { IPronosticoItem } from 'src/models/IPronosticoItem';
import TicketModalBoxHead from 'src/components/TicketModalBoxHead';

import Wrapper from './Wrapper';

import ModalBoxBody from './ModalBoxBody';
import ClusterSlider from './ClusterSlider';
import ClusterChange from './ClusterChange';
import GameList from './GameList';


interface Props {
    onChiudiClick: () => void,
    item: IPronosticoItem
}

const ModalBox: React.FC<Props> = ({ onChiudiClick, item }) => {
    const { descrizioneAvvenimento } = item;
    return (
        <>
            <Overlay />
            <Wrapper>
                <TicketModalBoxHead onChiudiClick={onChiudiClick} descrizioneAvvenimento={descrizioneAvvenimento} />
                <ModalBoxBody />
                <ClusterSlider />
                <ClusterChange />
                <GameList />
            </Wrapper>
        </>
    )
};

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,.75);
    z-index: 8000;
`;

export default ModalBox;