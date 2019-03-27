import * as React from 'react';

import SectionsBar from 'src/components/SectionsBar';
import TopBanner from 'src/components/TopBanner';
import BestEvents from 'src/components/BestEvents';
import MainEvents from 'src/components/MainEvents';
import OtherEvents from 'src/components/OtherEvents';
import BannersCarousel from 'src/components/BannersCarousel';
import BottomBanner from 'src/components/BottomBanner';
import AllApps from 'src/components/AllApps';
import AppSeo from 'src/components/AppSeo';
import Footer from 'src/components/Footer';
import items from 'src/mocks/sectionsBarItems';
import topBanner from 'src/mocks/topBanner';
import events from 'src/mocks/bestEventsItems';
import mainEventsTabs from 'src/mocks/mainEventsTabs';
import otherEventsTabs from 'src/mocks/otherEventsTabs';
import carouselBanners from 'src/mocks/carouselBanners';
import bottomBanner from 'src/mocks/bottomBanner';
import allAppsItems from 'src/mocks/allAppsItems';
import appSeoContent from 'src/mocks/appSeoContent';
import footerContent from 'src/mocks/footerContent';

import HomePageWrapper from './Wrapper';
import { ISectionsBarItem } from 'src/models/ISectionsBarItem';
import { IBanner } from 'src/models/IBanner';
import { IEvent } from 'src/models/IEvent';
import { IMainEventsTab } from 'src/models/IMainEventsTab';
import { IOtherEventsTab } from 'src/models/IOtherEventsTab';
import { IAllAppsItem } from 'src/models/IAllAppsItem';
import { IAppSeoContent } from 'src/models/IAppSeoContent';
import { IFooterContent } from 'src/models/IFooterContent';

interface Props {
  items: ISectionsBarItem[],
  topBanner: IBanner,
  events: IEvent[],
  mainEventsTabs: IMainEventsTab[],
  otherEventsTabs: IOtherEventsTab[],
  carouselBanners: IBanner[],
  bottomBanner: IBanner,
  allAppsItems: IAllAppsItem[],
  appSeoContent: IAppSeoContent,
  footerContent: IFooterContent,
}

class HomePage extends React.PureComponent<Props> {
  public render() {
    const { } = this.props;
    return (
      <HomePageWrapper>
        <SectionsBar items={items} />
        <TopBanner banner={topBanner} />
        <BestEvents events={events} />
        <MainEvents tabs={mainEventsTabs} />
        <OtherEvents tabs={otherEventsTabs} />
        <BannersCarousel banners={carouselBanners} />
        <BottomBanner banner={bottomBanner} />
        <AllApps items={allAppsItems} />
        <AppSeo content={appSeoContent} />
        <Footer content={footerContent} />
      </HomePageWrapper>

    )
  }
};

export default HomePage;
