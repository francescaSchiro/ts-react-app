import * as React from 'react';

import HomePageWrapper from './Wrapper';
import Title from '../Title';
import BestEvents from '../BestEvents';
import MainEvents from '../MainEvents';
import OtherEvents from '../OtherEvents';

const HomePage = () => (
  <HomePageWrapper>
    <Title>HomePage</Title>
    <BestEvents />
    <MainEvents />
    <OtherEvents />
  </HomePageWrapper>
);

export default HomePage;
