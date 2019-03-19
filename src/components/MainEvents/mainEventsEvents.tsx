export interface MainEventsEvent {
  // live?: boolean,
  score: string,
  time: string,
  // label?: string,
  eventName: string,
  gameName: string,
  outcomeValue: string[],
  outcomeOdd: string[],
  moreGamesNumber?: number,
}

export const mainEventsEvents1: MainEventsEvent[] = [
  {
    score: '1-1',
    time: '48:21',
    eventName: 'Chievo Verona - Cagliari',
    gameName: 'ESITO FINALE 1X2',
    outcomeValue: ['1', 'X', '2'],
    outcomeOdd: ['2.90', '3.00', '2.70'],
    moreGamesNumber: 256,
  },
  {
    score: '0-0',
    time: '01:46',
    eventName: 'Juventus - Empoli',
    gameName: 'ESITO FINALE 1X2',
    outcomeValue: ['1', 'X', '2'],
    outcomeOdd: ['1.22', '4.50', '15.00'],
    moreGamesNumber: 259,
  },
  {

    score: '0-1',
    time: '10:02',
    eventName: 'Udinese - Genoa',
    gameName: 'ESITO FINALE 1X2',
    outcomeValue: ['1', 'X', '2'],
    outcomeOdd: ['3.25', '3.00', '1.25'],
    moreGamesNumber: 236,
  },
];

export const mainEventsEvents2: MainEventsEvent[] = [
  {
    score: '1-2',
    time: '62:43',
    eventName: 'Estudiantes De Murcia - Atletico Pulpileno',
    gameName: 'ESITO FINALE 1X2',
    outcomeValue: ['1', 'X', '2'],
    outcomeOdd: ['5.50', '3.60', '1.55'],
    moreGamesNumber: 26,
  },
  {
    score: '0-0',
    time: '31:05',
    eventName: 'La Union - Real Murcia CF Imperial',
    gameName: 'ESITO FINALE 1X2',
    outcomeValue: ['1', 'X', '2'],
    outcomeOdd: ['2.80', '3.25', '2.30'],
    moreGamesNumber: 19,
  },
];

