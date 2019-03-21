import * as React from 'react';

import SectionsBar from 'src/components/SectionsBar';
import TopBanner from 'src/components/TopBanner';
import BestEvents from 'src/components/BestEvents';
import MainEvents from 'src/components/MainEvents';
import OtherEvents from 'src/components/OtherEvents';
import Banners from 'src/components/Banners';
import AllApps from 'src/components/AllApps';
import AppSeo from 'src/components/AppSeo';
import Footer from 'src/components/Footer';
import sectionsBarItems from 'src/mocks/sectionsBarItems';

import HomePageWrapper from './Wrapper';
import topBannerContent from './topBannerContent';
import bestEventsItems from './bestEventsItems';


const HomePage = () => (
  <HomePageWrapper>
    <SectionsBar sectionsBarItems={sectionsBarItems} />
    <TopBanner topBannerContent={topBannerContent} />
    <BestEvents bestEventsItems={bestEventsItems} />
    <MainEvents />
    <OtherEvents />
    <Banners />
    <AllApps />
    <AppSeo />
    <Footer />
  </HomePageWrapper>
);

export default HomePage;
