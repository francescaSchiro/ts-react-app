import { IBanners } from 'src/models/IBanners';

const banners: IBanners = {
  bannerBase: {
    imgUrl: 'https://cdn-m.sisal.it/documents/1227501/5490368/anniversario_ondemand_card_novita.png/363e6e70-eba4-4dc0-912d-6210ae159c27?t=1542122191733',
    url: 'https://m.sisal.it/scommesse-matchpoint/promozioni?prov=BNB_MOB_TUTTE_LE_PROMO',
  },
  bannerCarouselItems: [
    {
      category: 'PROMOZIONI SCOMMESSE',
      imgUrl: 'https://cdn-m.sisal.it/documents/1227501/6564143/anniversario_ondemand_card_carosello.png/300e2602-a1e6-47ae-b091-2cafab2ff740?t=1542116909339',
      title: 'ANNIVERSARIO ON DEMAND',
      description: ['Festeggia con noi il compleanno di questa grande', 'esclusiva Sisal Matchpoint ', 'e partecipa al concorso! Tutte le settimane in palio', '500€ di bonus scommesse', '.'],
      btnText: 'maggiori informazioni',
    },
    {

      category: 'SCOPRI GLI EVENTI DISPONIBILI',
      imgUrl: 'https://cdn-m.sisal.it/documents/1227501/12294388/Carosello+promo+seo/ce500c1d-6d14-444d-8981-cd58f1a1405e?t=1528291936545',
      title: 'SCOMMETTI CON SISAL',
      description: ['Calcio, basket e tennis, eventi di sport e spettacolo: scegli l\'evento e scommetti con Sisal sui principali campionati.'],
      btnText: 'maggiori informazioni',

    },
    {

      category: 'SUPERCOMBO',
      imgUrl: 'https://mtest-liferay.sisal.it/documents/1366518/2543562/supercombo_carosello-promo.png/f1e60a3c-4ad9-4ae0-b384-6999fb6214a2?t=1527067100056',
      title: 'WELCOME BONUS',
      description: ['Scommetti e divertiti con ', 'Sisal Matchpoint ', 'con una ', 'Welcome Bonus fino a 225€', '! Registrati e avrai fino a 25€ alla prima giocata e 40 bonus settimanali!'],
      btnText: 'vai a google',
    }
  ],
};

export default banners;
