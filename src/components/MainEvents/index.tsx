import * as React from 'react';

import MainEventsWrapper from './Wrapper';
import Redirect from '../Redirect';
import TabsContainer from './TabsContainer';
import TabLive from './TabLive';
import TabPrematch from './TabPrematch';
import EventsContainer from './EventsContainer';
import SportsContainer from './SportsContainer';
import SportsTab from './SportsTab';

import sportTabItems from './sportsTabItems';
import EventLeague from './EventLeague';
import EventContent from './EventContent';
import LiveScore from './LiveScore';

const MainEvents = () => (
  <MainEventsWrapper>
    <TabsContainer>
      <TabLive>LIVE</TabLive>
      <TabPrematch>PRE MATCH</TabPrematch>
    </TabsContainer>
    {/* Sports Tabs */}
    <SportsContainer>
      {
        sportTabItems.map((el, i) => (
        <SportsTab key={i} active={el.active}>
          {el.label}
        </SportsTab>
      ))}
    </SportsContainer>
    {/*Main-Events-Body*/}
    <MainEventsWrapper id='Main-Events-body'>
      <EventsContainer>
        <EventLeague>ITA Serie C</EventLeague>
        <EventContent>
          <LiveScore>1-0</LiveScore>
        </EventContent>
      </EventsContainer>  
    </MainEventsWrapper>

    <Redirect />
  </MainEventsWrapper>
);

export default MainEvents;
