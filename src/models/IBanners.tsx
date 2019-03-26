import { IBanner } from './IBanner';
import { IBannerBase } from './IBannerBase';

export interface IBanners {
    bannerBase: IBannerBase,
    bannerCarouselItems: IBanner[],
};