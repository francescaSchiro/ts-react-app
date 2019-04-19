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
/* chiamata @ click on TicketEvent Edit icon
 getGamesByEventSchedina => avvenimentoView {
    clusterList: [
        0: {idCluster: 27, descrizione: "TUTTE", clusterDefault: true,…}
        1: {
            classeDiEsitoList: [
                {
                    descrizione: "ESITO FINALE 1X2",
                    idClasseEsito: 601,
                },
                {
                    descrizione: "DOPPIA CHANCE",
                    idClasseEsito: 1441,
                }, .... x17
            ],
            clusterDefault: false,
            descrizione: "PRINCIPALI",
            idCluster: 80,
        },
        2: {idCluster: 93, descrizione: "GOAL", clusterDefault: false,…}
        3: {idCluster: 94, descrizione: "MULTIGOAL", clusterDefault: false,…}
        4: {idCluster: 121, descrizione: "1° TEMPO", clusterDefault: false,…}
        5: {idCluster: 122, descrizione: "2° TEMPO", clusterDefault: false,…}
        6: {idCluster: 84, descrizione: "CASA", clusterDefault: false,…}
        7: {idCluster: 85, descrizione: "OSPITE", clusterDefault: false,…}
        8: {idCluster: 114, descrizione: "COMBO", clusterDefault: false,…}
        9: {idCluster: 123, descrizione: "COMBOCHANCE", clusterDefault: false,…}
        10: {idCluster: 128, descrizione: "RISULTATI", clusterDefault: false,…}
        11: {idCluster: 135, descrizione: "SPECIALI", clusterDefault: false,…}
    ],
    codiceAvvenimento: 2542,
    codiceDisciplina: 1,
    codicePalinsesto: 29161,
    dataSvolgimento: "2019-04-20T12:30:00Z",
    descrizione: "Bisceglie - Fc Rieti",
    descrizioneManifestazione: "ITA Serie C",
    externalInfo: {
        matchInfoUrl: null,
        statisticheEsterneUrl: "https://www.sisal.it/scommesse-matchpoint/statistiche-e-risultati?clientmatchid=29161-2542",
        statisticheInterneUrl: null,
        streamingAvailable: false,
        streamingProvider: null,
    },
    iconaSportUrl: "/documents/10903/450920/Ic__0021_soccer.png",
    idBetradar: 15649846,
    live: false,
    numeroScommesse: 109,
    scommessaViewList: [
        0: {
            blackListMax: 0,
            blackListMin: 0,
            codice: 601,
            codiceClasseEsito: 3,
            descrizione: "ESITO FINALE 1X2",
            infoAggiuntivaList: [
                codice: 0,
                dataUltimaModifica: 1555642859814,
                descrizione: "ESITO FINALE 1X2",
                esitoViewList: [
                    0: {
                        codice: 1,
                        descrizione: "1",
                        legaturaMax: 30,
                        legaturaMin: 1,
                        quota: 240,
                        stato: 1,
                    }, 1,2...
                ]
                offertaLive: true,
                stato: 1,
            ],
            legaturaAAMS: 1,
            legaturaMassima: 30,
            legaturaMinima: 1,
            liveDelay: 6,
            multipla: 0,
            stato: 1,
            tipoVisualizzazione: 3,          ---------------!!!!!!!!!!!!!!!!!!!! IMPORTANT for RENDERING different views !!!!!!!!!!!!!!!
        },
        x 1,2,3,4,.....53.
    ],
};

*/
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