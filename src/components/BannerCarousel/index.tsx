import * as React from 'react';

import BannerCarouselSlider from './Wrapper';
import BannerWrapper from './BannerWrapper';

const BannerCarousel = () => (
  <BannerCarouselSlider id={'slider'}>
    <BannerWrapper id={'section1'}><h1>Section 1</h1></BannerWrapper>
    <BannerWrapper id={'section2'}><h1>Section 2</h1></BannerWrapper>
    <BannerWrapper id={'section3'}><h1>Section 3</h1></BannerWrapper> 
  </BannerCarouselSlider>
);

export default BannerCarousel;
