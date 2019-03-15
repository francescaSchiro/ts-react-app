interface IsectionsBarItem {
  active: boolean;
  key: number;
  label: string;
  icon?: string;
  iconText: () => number | string;
}

const sectionsBarItems: IsectionsBarItem[] = [
  {
    active: true,
    key: 0,
    label: 'HOME',
    icon:
      'https://m.sisal.it/scommesse-matchpoint/content/img/home.png?v=2.5.5',
    iconText: noDate
  },
  {
    active: false,
    key: 1,
    label: 'LIVE',
    icon:
      'https://m.sisal.it/scommesse-matchpoint/content/img/live.png?v=2.5.6',
    iconText: noDate
  },
  {
    active: false,
    key: 2,
    label: 'SCOMMESSE',
    icon:
      'https://cdn1.iconfinder.com/data/icons/hawcons/32/699915-icon-6-soccer-ball-512.png',
    iconText: noDate
  },
  {
    active: false,
    key: 3,
    label: 'OGGI',
    iconText: getCurrentDay
  },
  {
    active: false,
    key: 4,
    label: 'DOMANI',
    iconText: getNextDay
  },
  {
    active: false,
    key: 5,
    label: 'DOPODOMANI',
    iconText: getAfterTomorrowDay
  }
];

export default sectionsBarItems;

function getCurrentDay(): number {
  return 12;
  // const today: Date = new Date();
  // const secondParameter: Date = new Date(today.getFullYear(), 0, 1);
  // return Math.ceil((today - secondParameter) / 86400000);
}
function getNextDay(): number {
  return 13;
  // const today: any = new Date();
  // const secondParameter: any = new Date(today.getFullYear(), 0, 1);
  // return Math.ceil((today - secondParameter) / 86400000) + 1;
}
function getAfterTomorrowDay(): number {
  return 14;
  // const today: any = new Date();
  // const secondParameter: any = new Date(today.getFullYear(), 0, 1);
  // return Math.ceil((today - secondParameter) / 86400000) + 2;
}

function noDate(): string {
  return '';
}
