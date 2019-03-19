import mainEventsEvents, { MainEventsEvent } from 'src/components/MainEventsEvent/mainEventsEvents';


export interface MainEventsLeague {
  leagueLabel: string,
  leagueIconUrl: string,
  leagueEvents: MainEventsEvent[],
}

const mainEventsLeagues: MainEventsLeague[] = [
  {
    leagueLabel: 'ITA Serie C',
    leagueIconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
    leagueEvents: mainEventsEvents,
  },
  {
    leagueLabel: 'ITA Serie B',
    leagueIconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
    leagueEvents: mainEventsEvents,
  },

];

export default mainEventsLeagues;
