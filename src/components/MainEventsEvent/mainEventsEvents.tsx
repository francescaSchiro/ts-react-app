export interface MainEventsEvent {
  live?: boolean,
  score: string,
  time: string,
  // label?: string,
  eventName: string,
  gameName: string,
  outcomeValue: string[],
  outcomeOdd: string[],
  moreGamesNumber?: number,
}

const mainEventsEvents: MainEventsEvent[] = [
  {
    // live: false,
    score: '1-0',
    time: '1°T',
    // label: 'ITA Serie C',
    eventName: 'Atalanta - Brescia',
    gameName: 'ESITO FINALE 1X2',
    outcomeValue: ['1', 'X', '2'],
    outcomeOdd: ['1.09', '2.80', '2.25'],
    moreGamesNumber: 39,
  },
  {
    // live: false,
    score: '0-2',
    time: '51:46',
    // label: 'EIR Leinster Cup',
    eventName: 'Bray Wanderers - Cabinteely FC ',
    gameName: 'ESITO FINALE 1X2',
    outcomeValue: ['1', 'X', '2'],
    outcomeOdd: ['1.22', '4.50', '15.00'],
    moreGamesNumber: 14,
  },
  {
    // live: false,
    score: '0-2',
    time: '51:46',
    // label: 'EIR Leinster Cup',
    eventName: 'Bray Wanderers - Cabinteely FC ',
    gameName: 'ESITO FINALE 1X2',
    outcomeValue: ['1', 'X', '2'],
    outcomeOdd: ['1.22', '4.50', '15.00'],
    moreGamesNumber: 14,
  },
];

export default mainEventsEvents;
