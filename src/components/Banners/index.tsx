import * as React from 'react';

import BannersCarousel from 'src/components/BannersCarousel';
import BannerBase from './BannerBase';
import bannerItems from './bannerItems';

const Banners = () => (
  <>
    <BannersCarousel bannerItems={bannerItems} />
    <BannerBase />
  </>
);

export default Banners;
