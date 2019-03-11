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
// import LiveScore from './LiveScore';
// import EventName from './EventName';
// import EventContentActionsArrowRight from './EventContentActionsArrowRight';
// import GameName from './GameName';
// import GameOutcome from './GameOutcome';
// import EventContentGameAccordionTrigger from './EventContentGameAccordionTrigger';
// import OutcomeValue from './OutcomeValue';
// import OutcomeOdd from './OutcomeOdd';
import HR from '../HR';
// import HasMoreText from './HasMoreText';
// import HasMoreNumberArrowDown from './HasMoreNumberArrowDown';
// import Score from './Score';
// import Time from './Time';

const MainEvents = () => (
  <MainEventsWrapper>
    <TabsContainer>
      <TabLive>LIVE</TabLive>
      <TabPrematch>PRE MATCH</TabPrematch>
    </TabsContainer>
    {/* Sports Tabs */}
    <SportsContainer>
      {sportTabItems.map((el, i) => (
        <SportsTab key={i} active={el.active}>
          {el.label}
        </SportsTab>
      ))}
    </SportsContainer>
    {/*Main-Events-Body*/}
    <MainEventsWrapper id='Main-Events-body'>
      {/* 1st league */}
      <EventsContainer id='Event-Container'>
        <EventLeague id='Event-League'>ITA Serie C</EventLeague>
        <EventContent />
        <HR id='HR' />
        {/* second event */}
        <EventContent />
      </EventsContainer>
      {/* 2nd league */}
      <EventsContainer id='Event-Container'>
        <EventLeague id='Event-League'>ITA Serie B</EventLeague>
        <EventContent />
        <HR id='HR' />
        {/* second event */}
        <EventContent />
        <HR id='HR' />
      </EventsContainer>
    </MainEventsWrapper>
    <Redirect />
  </MainEventsWrapper>
);

export default MainEvents;
