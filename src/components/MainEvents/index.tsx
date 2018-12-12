import * as React from 'react';

import MainEventsWrapper from './Wrapper';
import Redirect from '../Redirect';
import TabsContainer from './TabsContainer';
import TabLive from './TabLive';
import TabPrematch from './TabPrematch';
import EventContainer from './EventContainer';
import SportsContainer from './SportsContainer';
import SportsTab from './SportsTab';

import sportTabItems from './sportsTabItems';

const MainEvents = () => (
  <MainEventsWrapper>
    <TabsContainer>
      <TabLive>LIVE</TabLive>
      <TabPrematch>PRE MATCH</TabPrematch>
    </TabsContainer>
    <EventContainer>
      <SportsContainer>
        {sportTabItems.map((el,i) => (
          <SportsTab key={i} active={el.active}>{el.label}</SportsTab>
        ))}
      </SportsContainer>
    </EventContainer>  
  <Redirect/>
  </MainEventsWrapper>
);

export default MainEvents;
