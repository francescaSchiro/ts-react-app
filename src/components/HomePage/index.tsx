import * as React from 'react';

import HomePageWrapper from './Wrapper';
import TopBanner from 'src/components/TopBanner';
import BestEvents from 'src/components/BestEvents';
import MainEvents from 'src/components/MainEvents';
import OtherEvents from 'src/components/OtherEvents';
import Banners from 'src/components/Banners';
import AllApps from 'src/components/AllApps';
import AppSeo from 'src/components/AppSeo';
import Footer from 'src/components/Footer';

import AppFooter from 'src/components/AppFooter';
import SectionsBar from 'src/components/SectionsBar';


const HomePage = () => (
  <HomePageWrapper>
    <SectionsBar />
    <TopBanner />
    <BestEvents />
    <MainEvents />
    <OtherEvents />
    <Banners />
    <AllApps />
    <AppSeo />
    <Footer />
    <AppFooter />
  </HomePageWrapper>
);

export default HomePage;
