import * as React from 'react';
import styled from 'src/theme/default/index';

import { IPronosticoItem } from 'src/models/IPronosticoItem';
import TicketModalBoxHead from 'src/components/TicketModalBoxHead';
import TicketModalBoxBody from 'src/components/TicketModalBoxBody';
import TicketModalBoxClusterSlider from 'src/components/TicketModalBoxClusterSlider';
import TicketModalBoxClusterChange from 'src/components/TicketModalBoxClusterChange';
import TicketModalBoxGameList from 'src/components/TicketModalBoxGameList';

import Wrapper from './Wrapper';
import clusterItems from 'src/mocks/clusterItems';
import clusterAccordionItems from 'src/mocks/clusterAccordionItems';


import GameList from './GameList';


interface Props {
    onChiudiClick: () => void,
    item: IPronosticoItem
}

const TicketModalBox: React.FC<Props> = ({ onChiudiClick, item }) => {
    const { descrizioneAvvenimento,
        descrizioneScommessa,
        descrizioneEsito,
        quota } = item;
    return (
        <>
            <Overlay />
            <Wrapper>
                <TicketModalBoxHead
                    onChiudiClick={onChiudiClick}
                    descrizioneAvvenimento={descrizioneAvvenimento}
                />
                <TicketModalBoxBody
                    descrizioneScommessa={descrizioneScommessa}
                    descrizioneEsito={descrizioneEsito}
                    quota={quota}
                />
                <TicketModalBoxClusterSlider clusterItems={clusterItems} />
                <TicketModalBoxClusterChange clusterAccordionItems={clusterAccordionItems} />
                <TicketModalBoxGameList />
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

export default TicketModalBox;