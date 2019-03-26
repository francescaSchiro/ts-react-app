import * as React from 'react';

import BannersCarousel from 'src/components/BannersCarousel';
import BannersBase from 'src/components/BannersBase';
import { IBanners } from 'src/models/IBanners';


interface Props {
  banners: IBanners;
}
const Banners: React.FC<Props> = ({ banners }) => {
  const { bannerBase, bannerCarouselItems } = banners;
  return (
    <>
      <BannersCarousel bannerCarouselItems={bannerCarouselItems} />
      <BannersBase bannerBase={bannerBase} />
    </>
  )
};

export default Banners;
