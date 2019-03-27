import { ISectionsBarItem } from 'src/models/ISectionsBarItem';

const sectionsBarItems: ISectionsBarItem[] = [
    {
        active: true,
        key: 0,
        label: 'HOME',
        icon:
            'https://m.sisal.it/scommesse-matchpoint/content/img/home.png?v=2.5.5',
        iconText: ''
    },
    {
        active: false,
        key: 1,
        label: 'LIVE',
        icon:
            'https://m.sisal.it/scommesse-matchpoint/content/img/live.png?v=2.5.6',
        iconText: ''
    },
    {
        active: false,
        key: 2,
        label: 'SCOMMESSE',
        icon:
            'https://cdn1.iconfinder.com/data/icons/hawcons/32/699915-icon-6-soccer-ball-512.png',
        iconText: ''
    },
    {
        active: false,
        key: 3,
        label: 'OGGI',
        icon: null,
        iconText: 12
    },
    {
        active: false,
        key: 4,
        label: 'DOMANI',
        icon: null,
        iconText: 13
    },
    {
        active: false,
        key: 5,
        label: 'DOPODOMANI',
        icon: null,
        iconText: 14
    }
];

export default sectionsBarItems;