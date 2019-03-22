import { IMainEventsTab } from 'src/models/IMainEventsTab'

const mainEventsTabs: IMainEventsTab[] = [
  {
    name: 'live',
    isActive: true,
    currentSport: {
      id: 0,
      name: 'calcio',
      leagues: [
        {
          id: 0,
          name: 'ITA Serie A',
          iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
          events: [
            {
              id: 0,
              iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
              leagueLabel: 'ITA Serie A',
              day: 'Today',
              time: '48:21',
              score: '1-1',
              eventName: 'Chievo Verona - Cagliari',
              gameName: 'ESITO FINALE 1X2',
              oddLabels: ['1', 'X', '2'],
              oddValues: ['2.90', '3.00', '2.70'],
              moreGamesNumber: 256,
            },
            {
              id: 1,
              iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
              leagueLabel: 'ITA Serie A',
              day: 'Today',
              time: '01:46',
              score: '0-0',
              eventName: 'Juventus - Empoli',
              gameName: 'ESITO FINALE 1X2',
              oddLabels: ['1', 'X', '2'],
              oddValues: ['1.22', '4.50', '15.00'],
              moreGamesNumber: 259,
            },
            {
              id: 2,
              iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
              leagueLabel: 'ITA Serie A',
              day: 'Today',
              time: '10:02',
              score: '0-1',
              eventName: 'Udinese - Genoa',
              gameName: 'ESITO FINALE 1X2',
              oddLabels: ['1', 'X', '2'],
              oddValues: ['3.25', '3.00', '1.25'],
              moreGamesNumber: 236,
            },
          ],
        },
        {
          id: 1,
          name: 'ESP IV Divisione',
          iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
          events: [
            {
              id: 3,
              iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
              leagueLabel: 'ESP IV Divisione',
              day: 'Today',
              time: '62:43',
              score: '1-2',
              eventName: 'Estudiantes De Murcia - Atletico Pulpileno',
              gameName: 'ESITO FINALE 1X2',
              oddLabels: ['1', 'X', '2'],
              oddValues: ['5.50', '3.60', '1.55'],
              moreGamesNumber: 26,
            },
            {
              id: 4,
              iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
              leagueLabel: 'ESP IV Divisione',
              day: 'Today',
              time: '31:05',
              score: '0-0',
              eventName: 'La Union - Real Murcia CF Imperial',
              gameName: 'ESITO FINALE 1X2',
              oddLabels: ['1', 'X', '2'],
              oddValues: ['2.80', '3.25', '2.30'],
              moreGamesNumber: 19,
            },
          ],
        },

      ],
    },
    sports: [
      {
        id: 0,
        name: 'calcio',
        leagues: [
          {
            id: 0,
            name: 'ITA Serie A',
            iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
            events: [
              {
                id: 0,
                iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
                leagueLabel: 'ITA Serie A',
                day: 'Today',
                time: '48:21',
                score: '1-1',
                eventName: 'Chievo Verona - Cagliari',
                gameName: 'ESITO FINALE 1X2',
                oddLabels: ['1', 'X', '2'],
                oddValues: ['2.90', '3.00', '2.70'],
                moreGamesNumber: 256,
              },
              {
                id: 1,
                iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
                leagueLabel: 'ITA Serie A',
                day: 'Today',
                time: '01:46',
                score: '0-0',
                eventName: 'Juventus - Empoli',
                gameName: 'ESITO FINALE 1X2',
                oddLabels: ['1', 'X', '2'],
                oddValues: ['1.22', '4.50', '15.00'],
                moreGamesNumber: 259,
              },
              {
                id: 2,
                iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
                leagueLabel: 'ITA Serie A',
                day: 'Today',
                time: '10:02',
                score: '0-1',
                eventName: 'Udinese - Genoa',
                gameName: 'ESITO FINALE 1X2',
                oddLabels: ['1', 'X', '2'],
                oddValues: ['3.25', '3.00', '1.25'],
                moreGamesNumber: 236,
              },
            ],
          },
          {
            id: 1,
            name: 'ESP IV Divisione',
            iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
            events: [
              {
                id: 3,
                iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
                leagueLabel: 'ESP IV Divisione',
                day: 'Today',
                time: '62:43',
                score: '1-2',
                eventName: 'Estudiantes De Murcia - Atletico Pulpileno',
                gameName: 'ESITO FINALE 1X2',
                oddLabels: ['1', 'X', '2'],
                oddValues: ['5.50', '3.60', '1.55'],
                moreGamesNumber: 26,
              },
              {
                id: 4,
                iconUrl: 'http://www.sandandsurfsoccer.com/wp-content/uploads/sites/1028/2019/01/icon-white-soccer.png',
                leagueLabel: 'ESP IV Divisione',
                day: 'Today',
                time: '31:05',
                score: '0-0',
                eventName: 'La Union - Real Murcia CF Imperial',
                gameName: 'ESITO FINALE 1X2',
                oddLabels: ['1', 'X', '2'],
                oddValues: ['2.80', '3.25', '2.30'],
                moreGamesNumber: 19,
              },
            ],
          },

        ],
      },
      {
        id: 1,
        name: 'tennis',
        leagues: [{
          id: 0,
          name: 'Atp/Wta Miami',
          iconUrl: 'http://www.ymcamidtn.org/_assets/images/icons/icon-tennis-white.png',
          events: [
            {
              id: 0,
              iconUrl: 'http://www.ymcamidtn.org/_assets/images/icons/icon-tennis-white.png',
              leagueLabel: 'Atp/Wta Miami',
              day: 'Today',
              time: '48:21',
              score: '1-1',
              eventName: 'Chievo Verona - Cagliari',
              gameName: 'ESITO FINALE 1X2',
              oddLabels: ['1', 'X', '2'],
              oddValues: ['2.90', '3.00', '2.70'],
              moreGamesNumber: 256,
            },
          ],
        }],
      },
      {
        id: 2,
        name: 'basket',
        leagues: [],
      },
      {
        id: 3,
        name: 'volley',
        leagues: [],
      },
    ]

  },
  {
    name: 'pre match',
    isActive: false,
    currentSport: {
      id: 10000,
      name: 'pre match',
      leagues: [
        {
          id: 2138477123,
          name: 'pre match',
          iconUrl: 'pre match',
          events: [
            {
              id: 314789132798,
              iconUrl: 'pre match',
              leagueLabel: 'pre match',
              day: 'pre match',
              time: 'pre match',
              score: 'pre match',
              eventName: 'pre match',
              gameName: 'pre match',
              oddLabels: [],
              oddValues: [],
              moreGamesNumber: 0,
            }

          ],
        }

      ]
    },
    sports: [{
      id: 10000,
      name: 'pre match',
      leagues: [
        {
          id: 2138477123,
          name: 'pre match',
          iconUrl: 'pre match',
          events: [
            {
              id: 314789132798,
              iconUrl: 'pre match',
              leagueLabel: 'pre match',
              day: 'pre match',
              time: 'pre match',
              score: 'pre match',
              eventName: 'pre match',
              gameName: 'pre match',
              oddLabels: [],
              oddValues: [],
              moreGamesNumber: 0,
            }

          ],
        }

      ]
    }]
  }
];

export default mainEventsTabs;
