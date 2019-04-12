import * as React from 'react';
import styled from 'src/theme/default/index';

import { IPronosticoItem } from 'src/models/IPronosticoItem';
import { IGameListItem } from 'src/models/IGameListItem';
import TicketModalBoxHead from 'src/components/TicketModalBoxHead';
import TicketModalBoxBody from 'src/components/TicketModalBoxBody';
import TicketModalBoxClusterSlider from 'src/components/TicketModalBoxClusterSlider';
import TicketModalBoxClusterChange from 'src/components/TicketModalBoxClusterChange';
import TicketModalBoxGameList from 'src/components/TicketModalBoxGameList';

import Wrapper from './Wrapper';


interface Props {
    onChiudiClick: () => void,
    item: IPronosticoItem,
    clusterItems: string[],
    clusterAccordionItems: string[],
    gameListItems: IGameListItem[],
};

const TicketModalBox: React.FC<Props> = ({ onChiudiClick, item, clusterItems, clusterAccordionItems, gameListItems }) => {
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
                <TicketModalBoxGameList
                    descrizioneScommessa={descrizioneScommessa}
                    gameListItems={gameListItems}
                />
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