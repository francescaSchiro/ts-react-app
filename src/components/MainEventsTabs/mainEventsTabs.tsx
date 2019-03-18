export interface MainEventTab {
  tabName: string,
  isTabActive: boolean,
}

const mainEventsTabs: MainEventTab[] = [
  {
    tabName: 'live',
    isTabActive: false,

  },
  {
    tabName: 'pre match',
    isTabActive: true,
  }

];

export default mainEventsTabs;
