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
import items from 'src/mocks/sectionsBarItems';
import content from 'src/mocks/topBannerContent';
import events from 'src/mocks/bestEventsItems';

import HomePageWrapper from './Wrapper';


const HomePage = () => (
  <HomePageWrapper>
    <SectionsBar items={items} />
    <TopBanner content={content} />
    <BestEvents events={events} />
    <MainEvents />
    <OtherEvents />
    <Banners />
    <AllApps />
    <AppSeo />
    <Footer />
  </HomePageWrapper>
);

export default HomePage;
