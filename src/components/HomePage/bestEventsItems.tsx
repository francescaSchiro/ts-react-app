export interface IBestEventItem {
  iconUrl: string,
  leagueLabel: string,
  gameLabels: string[],
  day: string,
  time: string,
  gameName: string,
  oddValues: string[],
}

const bestEventsItems: IBestEventItem[] = [
  {
    iconUrl: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699915-icon-6-soccer-ball-512.png',
    leagueLabel: 'INT Champions League',
    gameLabels: ['1', 'X', '2'],
    day: 'Mer',
    time: '18:55',
    gameName: 'Real Madrid - CSKA Mosca',
    oddValues: ['1.25', '5.90', '12.50'],
  },
  {
    iconUrl: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699915-icon-6-soccer-ball-512.png',
    leagueLabel: 'GER 2. Bundesliga',
    gameLabels: ['1', 'X', '2'],
    day: 'Lun',
    time: '20:30',
    gameName: 'JAHN REGENSBURG - GREUTHER FURTH',
    oddValues: ['1.40', '2.50', '3.15'],
  },
  {
    iconUrl: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699915-icon-6-soccer-ball-512.png',
    leagueLabel: 'ITA Serie C',
    gameLabels: ['1', 'X', '2'],
    day: 'Mar',
    time: '20:45',
    gameName: 'Pordenone - Monza',
    oddValues: ['2.10', '3.00', '3.75'],
  },

];

export default bestEventsItems;