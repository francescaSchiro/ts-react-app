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


import HomePageWrapper from './Wrapper';


const HomePage = () => (
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
    <Footer />
  </HomePageWrapper>
);

export default HomePage;
