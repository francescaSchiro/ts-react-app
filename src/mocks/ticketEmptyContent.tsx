import { ITicketEmptyContent } from 'src/models/ITicketEmptyContent';

const ticketEmptyContent: ITicketEmptyContent = {
    message: 'Naviga le sezioni Live, Scommesse e seleziona le scommesse toccando le quote.    Clicca sopra per MULTIPLA e SISTEMA.',
    categories: [
        {
            name: 'LIVE',
            links: [
                {
                    linkName: 'Scommesse Live',
                    eventsNumber: 56,
                    url: 'https://m.sisal.it/scommesse-matchpoint/#!/program/1/0/0/0',
                },

            ],
        },
        {
            name: 'SCOMMESSE',
            links: [
                {
                    linkName: 'Calcio',
                    eventsNumber: 728,
                    url: 'https://m.sisal.it/scommesse-matchpoint/#!/program/2/1/0/0',
                },
                {
                    linkName: 'Tennis',
                    eventsNumber: 94,
                    url: 'https://m.sisal.it/scommesse-matchpoint/#!/program/2/3/0/0',
                },
                {
                    linkName: 'Basket',
                    eventsNumber: 50,
                    url: 'https://m.sisal.it/scommesse-matchpoint/#!/program/2/2/0/0',
                },
                {
                    linkName: 'Volley',
                    eventsNumber: 35,
                    url: 'https://m.sisal.it/scommesse-matchpoint/#!/program/2/5/0/0',
                },
            ],
        },
    ]
};
export default ticketEmptyContent;