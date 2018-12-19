interface MyBannerItems {
  key: number;
  mainTitle: string;
  coverImageUrl: string;
  secondaryTitle: string;
  description: string | string[];
}

const bannerItems: MyBannerItems[] = [
  {
    key: 1,
    mainTitle: 'PROMOZIONI SCOMMESSE',
    coverImageUrl: 'https://cdn-m.sisal.it/documents/1227501/6564143/anniversario_ondemand_card_carosello.png/300e2602-a1e6-47ae-b091-2cafab2ff740?t=1542116909339',
    secondaryTitle: 'ANNIVERSARIO ON DEMAND',
    description: ['Festeggia con noi il compleanno di questa grande', 'esclusiva Sisal Matchpoint ', 'e partecipa al concorso! Tutte le settimane in palio' , '500€ di bonus scommesse', '.']
  },
  {
    key: 2,
    mainTitle: 'SCOPRI GLI EVENTI DISPONIBILI',
    coverImageUrl: 'https://cdn-m.sisal.it/documents/1227501/12294388/Carosello+promo+seo/ce500c1d-6d14-444d-8981-cd58f1a1405e?t=1528291936545',
    secondaryTitle: 'SCOMMETTI CON SISAL',
    description: ['Calcio, basket e tennis, eventi di sport e spettacolo: scegli l\'evento e scommetti con Sisal sui principali campionati.']
  },
  {
    key: 3,
    mainTitle: 'PROMOZIONI SCOMMESSE',
    coverImageUrl: 'https://cdn-m.sisal.it/documents/1227501/6564143/Welcome_bomus_carosello_promo_seo_205x97_.png/7984223e-ec7f-46fc-af64-3517a3815f8b?t=1538054196059',
    secondaryTitle: 'WELCOME BONUS',
    description: ['Scommetti e divertiti con ', 'Sisal Matchpoint ', 'con una ' , 'Welcome Bonus fino a 225€', '! Registrati e avrai fino a 25€ alla prima giocata e 40 bonus settimanali!']
  }



];

export default bannerItems;
