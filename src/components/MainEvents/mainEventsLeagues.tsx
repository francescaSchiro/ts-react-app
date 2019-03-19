import { MainEventsEvent, mainEventsEvents1, mainEventsEvents2 } from './mainEventsEvents';


export interface MainEventsLeague {
  leagueLabel: string,
  leagueIconUrl: string,
  leagueEvents: MainEventsEvent[],
}

const mainEventsLeagues: MainEventsLeague[] = [
  {
    leagueLabel: 'ITA Serie A',
    leagueIconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
    leagueEvents: mainEventsEvents1,
  },
  {
    leagueLabel: 'ESP IV Divisione',
    leagueIconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
    leagueEvents: mainEventsEvents2,
  },

];

export default mainEventsLeagues;
