import * as React from 'react';

// import BannersWrapper from './Wrapper';
import BannerCarousel from './BannerCrousel';
import BannerBase from '../BannerBase';

const Banners = () => (
  <div datatype={'BannersWrapper'}>
    <BannerCarousel/>
    <BannerBase />
  </div>
);

export default Banners;
