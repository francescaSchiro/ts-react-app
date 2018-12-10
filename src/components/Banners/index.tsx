import * as React from 'react';

import BannersWrapper from './Wrapper';
import BannerCarousel from '../BannerCarousel';
import BannerBase from '../BannerBase';

const Banners = () => (
  <BannersWrapper>
    <BannerCarousel/>
    <BannerBase />
  </BannersWrapper>
);

export default Banners;
