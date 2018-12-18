import * as React from 'react';

import BannerCarouselSlider from './Wrapper';
import BannerWrapper from './BannerWrapper';
import Title from '../Title';
import TitleWrapper from '../TitleWrapper';

const BannerCarousel = () => (
  <BannerCarouselSlider id={'slider'}>
    <BannerWrapper id={'section1'}><TitleWrapper bg={'#eaeaea'} fontColor={'pink'}><Title>PROMOZIONI SCOMMESSE</Title></TitleWrapper></BannerWrapper>
    <BannerWrapper id={'section2'}><TitleWrapper bg={'#eaeaea'} fontColor={'#393939'}><Title>SCOPRI GLI EVENTI DISPONIBILI</Title></TitleWrapper></BannerWrapper>
    <BannerWrapper id={'section3'}><TitleWrapper bg={'#eaeaea'} fontColor={'#393939'}><Title>PROMOZIONI SCOMMESSE</Title></TitleWrapper></BannerWrapper> 
  </BannerCarouselSlider>
);

export default BannerCarousel;
