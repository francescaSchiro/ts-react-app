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
import EventName from './EventName';
import EventContentActionsArrowRight from './EventContentActionsArrowRight';
import GameName from './GameName';
import GameOutcome from './GameOutcome';
import EventContentGameAccordionTrigger from './EventContentGameAccordionTrigger';

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
      <EventsContainer id='Event-Container'>
        <EventLeague id='Event-League'>ITA Serie C</EventLeague>
         <EventContent id='Event-Content-Grid'>
         <LiveScore id='LiveScore'>1-0</LiveScore>
          <EventName id='Event-Name'>Atalanta - Brescia</EventName>
          <EventContentActionsArrowRight />
          <GameName>ESITO FINALE 1X2</GameName>
          <GameOutcome gridColumn={'1/3'}>1</GameOutcome>
          <GameOutcome gridColumn={'3/4'}>X</GameOutcome>
          <GameOutcome gridColumn={'4/5'}>2</GameOutcome>
          <EventContentGameAccordionTrigger gridColumn={'5/6'}/>
        </EventContent> 
      </EventsContainer>  
    </MainEventsWrapper> 

    <Redirect />
    </MainEventsWrapper>
  
);

export default MainEvents;
