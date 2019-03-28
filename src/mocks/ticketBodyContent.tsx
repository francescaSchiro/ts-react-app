import { ITicketBodyContent } from 'src/models/ITicketBodyContent';

const ticketBodyContent: ITicketBodyContent = {
    sistema: false,
    pronosticoList: [
        {
            avvenimentoKey: '29133-34934',
            blackListMax: 0,
            blackListMin: 0,
            codiceAvvenimento: 34934,
            codiceClasseEsito: 3,
            codiceClasseEsitoAAMS: 0,
            codiceDisciplina: 0,
            codiceEsito: 1,
            codiceEsitoAAMS: 0,
            codiceInfoAggiuntiva: 0,
            codicePalinsesto: 29133,
            codiceScommessa: 601,
            dataAvvenimento: 1553782800000,
            descrizioneAvvenimento: 'Ssd Ortona Calcio - Pescara',
            descrizioneEsito: '1',
            descrizioneManifestazione: '',
            descrizioneScommessa: 'ESITO FINALE 1X2',
            fissa: false,
            formattedDataAvvenimento: '28/3/2019 ore 15:20',
            formattedHandicap: '',
            handicap: 0,
            handicapVariato: false,
            legameMassimo: 30,
            legameMinimo: 1,
            legameMultipla: 1,
            live: true,
            liveDelay: 0,
            multipla: 0,
            pronosticoKey: '29133-34934-601-0-1',
            providerId: 0,
            quota: 675,
            quotaVariata: false,
            risultato: '',
            scommessaKey: '29133-34934-601-0',
            stato: 1,
        },
        {
            avvenimentoKey: '29132-58814', //
            blackListMax: 0,
            blackListMin: 0,
            codiceAvvenimento: 58814,
            codiceClasseEsito: 3,
            codiceClasseEsitoAAMS: 0,
            codiceDisciplina: 0,
            codiceEsito: 3,
            codiceEsitoAAMS: 0,
            codiceInfoAggiuntiva: 0,
            codicePalinsesto: 29132,
            codiceScommessa: 601,
            dataAvvenimento: 1553783400000, //
            descrizioneAvvenimento: 'Colombe FC - Pwd Bamenda', //
            descrizioneEsito: '2',
            descrizioneManifestazione: '',
            descrizioneScommessa: 'ESITO FINALE 1X2', //
            fissa: false,
            formattedDataAvvenimento: '28/3/2019 ore 15:30', //
            formattedHandicap: '',
            handicap: 0,
            handicapVariato: false,
            legameMassimo: 30,
            legameMinimo: 1,
            legameMultipla: 1,
            live: true,
            liveDelay: 0,
            multipla: 0,
            pronosticoKey: '29132-58814-601-0-3',
            providerId: 0,
            quota: 500, // diviso 100
            quotaVariata: false, //
            risultato: '',
            scommessaKey: '29132-58814-601-0',
            stato: 1,
        }
    ]
};
export default ticketBodyContent;