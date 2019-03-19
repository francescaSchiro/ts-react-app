export interface MainEventSport {
  sportName: string,
  isActive: boolean,
}

const mainEventsSports: MainEventSport[] = [
  {
    sportName: 'calcio',
    isActive: true,
  },
  {
    sportName: 'tennis',
    isActive: false,
  },
  {
    sportName: 'basket',
    isActive: false,
  },
  {
    sportName: 'volley',
    isActive: false,
  },

];

export default mainEventsSports;
