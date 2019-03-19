export interface OtherEventsTab {
  isTabActive: boolean,
  label: string,
}

const otherEventsTabs: OtherEventsTab[] = [
  {
    isTabActive: true,
    label: 'calcio',
  },
  {
    isTabActive: false,
    label: 'tennis',
  },
  {
    isTabActive: false,
    label: 'basket',
  },
];

export default otherEventsTabs;

