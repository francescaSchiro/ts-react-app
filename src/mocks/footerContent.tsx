import { IFooterContent } from 'src/models/IFooterContent';

const footerContent: IFooterContent = {
    footerInfoLinks: [
        {
            url: 'https://m.sisal.it/scommesse-matchpoint/scommesse-on-demand',
            label: 'Scommesse on Demand',
        },
        {
            url: 'https://m.sisal.it/scommesse-matchpoint/promozioni',
            label: 'Promozioni',
        },
        {
            url: 'https://m.sisal.it/scommesse-live',
            label: 'Scommesse Live',
        },
        {
            url: 'https://m.sisal.it/scommesse-matchpoint/foglio-quote',
            label: 'Foglio quote',
        },
        {
            url: 'https://m.sisal.it/scommesse',
            label: 'Scommesse',
        },
        {
            url: 'https://m.sisal.it/scommesse-matchpoint/scommesse-matchpoint',
            label: 'Palinsesto Scommesse',
        },
    ],
    footerHelpIcons: [
        {
            url: 'https://m.sisal.it/sisal-chat/chat/ChatUser.htm?ref=m&nic=&area=Cerchi%20Aiuto&mF=true',
            label: 'Chat',
            iconId: 'C',
        },
        {
            url: 'tel:800999445',
            label: '800.999.445',
            iconId: 'N',

        },
        {
            url: 'https://m.sisal.it/contatti',
            label: 'Contatti',
            iconId: 'C',

        },
        {
            url: 'https://m.sisal.it/scommesse-matchpoint/faq',
            label: 'FAQ',
            iconId: 'F',
        },

    ],
    footerLogos: [
        {
            imgUrl: 'https://cdn-m.sisal.it/documents/1227501/5490413/01_Timone.png/d6ea05df-bdb3-4f64-8879-6859a39c4cb9?t=1537965537798',
            goToUrl: 'https://www.adm.gov.it/portale/monopoli/giochi',
        },
        {
            imgUrl: 'https://cdn-m.sisal.it/documents/1227501/5490413/02_ADM.png/ebf51c0c-2a2c-4319-9100-e3b20d2c4e21?t=1537965539148',
            goToUrl: 'https://www.adm.gov.it/portale/monopoli/giochi',
        },
        {
            imgUrl: 'https://cdn-m.sisal.it/documents/1227501/5490413/03_Gioca+il+giusto.png/6a7233f0-0a00-454a-a9cb-dcd52d5e6812?t=1537965539541',
            goToUrl: 'https://m.sisal.it//societa/gioca-il-giusto?backto=https://m.sisal.it/scommesse-matchpoint/&amp;siteid=5',
        },
        {
            imgUrl: 'https://cdn-m.sisal.it/documents/1227501/5490413/04_%2B18.png/cef5dff0-7b23-4e07-a41f-9ece1a5bb4a1?t=1537965539973',
            goToUrl: 'https://m.sisal.it/societa/tutela-minori?backto=https://m.sisal.it/scommesse-matchpoint/&siteid=5',
        },
    ],
    footerBottomInfo: {
        title: 'IL GIOCO é VIETATO AI MINORI E PUò CAUSARE DIPENDENZA PATOLOGICA',
        copyright: 'Sisal © Sisal Entertainment S.p.A. partita IVA 02433760135 - Conc. GAD: 15155',
        cookiesText: 'Questo sito e le piattaforme di gioco utilizzano',
        cookiesLink: 'https://m.sisal.it/societa/cookies?backto=https://m.sisal.it/scommesse-matchpoint/&siteid=5',
    },
};

export default footerContent;