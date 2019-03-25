export interface IEvent {
    id: number,
    iconUrl: string,
    leagueLabel: string,
    day: string,
    time: string,
    score: string,
    eventName: string,
    gameName: string,
    oddLabels: string[],
    oddValues: string[],
    moreGamesNumber: number,

}

/*
getEventsByParams?section=1&sport=1 {
descrizione: string, // "Calcio"
inEvidenzaList: IAvvenimento[]
}
 */
export interface IAvvenimento {
    codiceAvvenimento: number, // partita id
    codiceDisciplina: number, // sport
    codiceManifestazione: number, // league
    codicePalinsesto: number, // ? 
    dataSvolgimento: string, // giorno ora day & time
    descrizione: string // "team1 - team2" eventName
    descrizioneManifestazione: string, // "ITA Serie A" leagueLabel 
    iconaSportUrl: string, // img path iconUrl
    live: boolean,
    ls?: ILs, // LiveScore Obj: only when live: true
    numeroScommesse: number, // 14 moreGamesNumber
    scommessaViewList: IScommessaViewItem[], // classiD'esito gameName[]
    streaming: boolean, // false
};

export interface ILs {
    addPlayTimeMs: number,
    cardList: ICard[],
    codiceAvvenimento: number,
    codicePalinsesto: number,
    normalTimeHalfDurationMs: number,
    playTimeMs: number,
    scoreList: IScoreItem[],
    server: null,
    showTimer: boolean, // true
    statusCode: number, // 1
    statusDescription: string // "2° tempo"
};

export interface ICard {
    type: 'YELLOW' | 'RED',
    playerTeam: string,
};

export interface IScoreItem {
    type: string, // Current
    team1: number, // 0
    team2: number // 1
};

export interface IScommessaViewItem { // [ 1x2, goal/nogoal, underover, ...]
    blackListMax: number, // 0
    blackListMin: number, // 0
    codice: number, // 601
    codiceClasseEsito: number, // 3
    descrizione: string, // "ESITO FINALE 1X2" gameName
    infoAggiuntivaList: IInfoAggiuntivaItem[],
    legaturaAAMS: number, // 1
    legaturaMassima: number, // 30
    legaturaMinima: number, // 1
    liveDelay: number, // 6
    multipla: number, // 0
    stato: number,  // 1
    tipoVisualizzazione: number, // 3
};

export interface IInfoAggiuntivaItem {
    codice: number, // 0
    dataUltimaModifica: number,
    descrizione: string, //  "ESITO FINALE 1X2" gameName
    esitoViewList: IEsitoViewItem[],
    offertaLive: boolean, // true
    stato: number, // 1
};

export interface IEsitoViewItem { // [ {1}, {x}, {2}]
    codice: number, // 1
    descrizione: string, // "1" oddLabel
    legaturaMax: number, // 30
    legaturaMin: number // 1
    quota: number, // 3400, oddValue
    stato: number, // 1
}