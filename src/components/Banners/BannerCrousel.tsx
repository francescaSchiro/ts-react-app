import * as React from 'react';

import BannerCarouselSlider from './BannerCarouselWrapper';
import BannerWrapper from './BannerWrapper';
import Title from '../Title';
import TitleWrapper from '../TitleWrapper';
import CoverImage from './CoverImage';
import MixedTextWrapper from '../MixedTextWrapper';
import PLeftBanner from '../PLeftBanner';
// import CardWrapper from './CardWrapper';

const BannerCarousel = () => (
  <BannerCarouselSlider id={'slider'}>
    {/* banner 1 */}
    <BannerWrapper id={'section1'}>
      <TitleWrapper bg={'#eaeaea'}>
        <Title fontColor={'#393939'}>PROMOZIONI SCOMMESSE</Title>
      </TitleWrapper>
      <CoverImage imgUrl={'https://cdn-m.sisal.it/documents/1227501/6564143/anniversario_ondemand_card_carosello.png/300e2602-a1e6-47ae-b091-2cafab2ff740?t=1542116909339'}/>
      <TitleWrapper padding={'10px 10px 2px 10px'}>
        <Title fontWeight={400} textAlign={'left'} >
          ANNIVERSARIO ON DEMAND
        </Title>
      </TitleWrapper>

      <MixedTextWrapper>
        <PLeftBanner >Festeggia con noi il compleanno di questa grande </PLeftBanner>
        <PLeftBanner fontWeight={700}>esclusiva Sisal Matchpoint </PLeftBanner>
        <PLeftBanner>e partecipa al concorso! Tutte le settimane in palio </PLeftBanner>
        <PLeftBanner fontWeight={700}>500€ di bonus scommesse.</PLeftBanner>
      </MixedTextWrapper>

    </BannerWrapper>

    {/* banner 2 */}
    <BannerWrapper id={'section2'}>
      <TitleWrapper bg={'#eaeaea'}>
        <Title fontColor={'#393939'}>SCOPRI GLI EVENTI DISPONIBILI</Title>
      </TitleWrapper>
      
      <CoverImage imgUrl={'https://cdn-m.sisal.it/documents/1227501/12294388/Carosello+promo+seo/ce500c1d-6d14-444d-8981-cd58f1a1405e?t=1528291936545'}/>
      <MixedTextWrapper>
        <PLeftBanner >Festeggia con noi il compleanno di questa grande </PLeftBanner>
        <PLeftBanner fontWeight={700}>esclusiva Sisal Matchpoint </PLeftBanner>
        <PLeftBanner>e partecipa al concorso! Tutte le settimane in palio </PLeftBanner>
        <PLeftBanner fontWeight={700}>500€ di bonus scommesse</PLeftBanner>
        <PLeftBanner>.</PLeftBanner>
      </MixedTextWrapper>
    </BannerWrapper>

    {/* banner 3 */}
    <BannerWrapper id={'section3'}>
      <TitleWrapper bg={'#eaeaea'}>
        <Title fontColor={'#393939'}>PROMOZIONI SCOMMESSE</Title>
      </TitleWrapper>
      <CoverImage imgUrl={'https://cdn-m.sisal.it/documents/1227501/6564143/Welcome_bomus_carosello_promo_seo_205x97_.png/7984223e-ec7f-46fc-af64-3517a3815f8b?t=1538054196059'}/>
    </BannerWrapper>
  </BannerCarouselSlider>
);

export default BannerCarousel;

//  const Banners = [
//   {
//     id: 1,
//     coverImageUrl: 'URL',
//     mainTitle: 'Title',
//     secondaryTitle: 'h5'
//     description: 'p This is my descriprion of the Banner Content'
//   },
//   {
//     id: 2,
//     coverImageUrl: 'URL',
//     mainTitle: 'Title',
//     secondaryTitle: 'h5'
//     description: 'p This is my descriprion of the Banner Content'

//   }
// ]
