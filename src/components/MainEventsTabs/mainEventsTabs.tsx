export interface MainEventTab {
  tabName: string,
  isTabActive: boolean,
}

const mainEventsTabs: MainEventTab[] = [
  {
    tabName: 'live',
    isTabActive: true,

  },
  {
    tabName: 'pre match',
    isTabActive: false,
  }

];

export default mainEventsTabs;
