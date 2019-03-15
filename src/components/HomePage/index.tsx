import * as React from 'react';

import HomePageWrapper from './Wrapper';
import TopBanner from 'src/components/TopBanner';
import BestEvents from 'src/components/BestEvents';
import MainEvents from '../MainEvents';
import OtherEvents from '../OtherEvents';

import AppFooter from 'src/components/AppFooter';
import Banners from 'src/components/Banners';
import AppSeo from 'src/components/AppSeo';
import SectionsBar from 'src/components/SectionsBar';



const HomePage = () => (
  <HomePageWrapper>
    <SectionsBar />
    <TopBanner />
    <BestEvents />
    <MainEvents />
    <OtherEvents />
    <Banners />
    <AppSeo />
    <AppFooter />
  </HomePageWrapper>
);

export default HomePage;
