import * as React from 'react';

import BannersCarousel from 'src/components/BannersCarousel';
import BannersBase from 'src/components/BannersBase';
import bannerItems from './bannerItems';

const Banners = () => (
  <>
    <BannersCarousel bannerItems={bannerItems} />
    <BannersBase imgUrl={'https://cdn-m.sisal.it/documents/1227501/5490368/anniversario_ondemand_card_novita.png/363e6e70-eba4-4dc0-912d-6210ae159c27?t=1542122191733'} />
  </>
);

export default Banners;
