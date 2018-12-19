import * as React from 'react';

import BannerCarouselSlider from './BannerCarouselWrapper';
import BannerWrapper from './BannerWrapper';
import Title from '../Title';
import TitleWrapper from '../TitleWrapper';
import CoverImage from './CoverImage';
import MixedTextWrapper from '../MixedTextWrapper';
import PLeftBanner from '../PLeftBanner';
import BannerButton from './BannerButton';
import BannerButtonContainer from './BannerButtonContainer';
import CardWrapper from './CardWrapper';
import bannerItems from './bannerItems';







const BannerCarousel = () => (
  <BannerCarouselSlider id={'slider'}>
    {bannerItems.map(el=> (
    <BannerWrapper key={el.key}>
      <TitleWrapper bg={'#eaeaea'} padding={'8px 0px 12px 0px'}>
        <Title fontColor={'#393939'}>{el.mainTitle}</Title>
      </TitleWrapper>
      <CardWrapper>
        <CoverImage imgUrl={el.coverImageUrl}/>
        <TitleWrapper padding={'10px 10px 2px 10px'}>
          <Title textAlign={'left'}>{el.secondaryTitle}</Title>
        </TitleWrapper>
        <MixedTextWrapper>
          <PLeftBanner> {el.description[0]}</PLeftBanner>
          <PLeftBanner fontWeight={700}> {el.description[1]}</PLeftBanner>
          <PLeftBanner> {el.description[2]}</PLeftBanner>
          <PLeftBanner fontWeight={700}> {el.description[3]}</PLeftBanner>
          <PLeftBanner> {el.description[4]}</PLeftBanner>
        </MixedTextWrapper>
        <BannerButtonContainer>
          <BannerButton>
            <Title>MAGGIORI INFORMAZIONI</Title>
          </BannerButton>
        </BannerButtonContainer>
      </CardWrapper>
    </BannerWrapper>
  ))}
  </BannerCarouselSlider>
);

export default BannerCarousel;