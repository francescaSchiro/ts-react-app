import styled from '../../theme/default/index';
import * as React from 'react';
import LiveScore from './LiveScore';
import Score from './Score';
import Time from './Time';
import EventName from './EventName';
// import EventContentActionsArrowRight from './EventContentActionsArrowRight';
import GameName from './GameName';
import GameOutcome from './GameOutcome';
import OutcomeValue from './OutcomeValue';
import OutcomeOdd from './OutcomeOdd';
import EventContentGameAccordionTrigger from './EventContentGameAccordionTrigger';
import HasMoreText from './HasMoreText';
import HasMoreNumberArrowDown from './HasMoreNumberArrowDown';
import ArrowRight from '../ArrowRight';

const EventContentWrapper = styled.div`

  margin: 5px 7px 8px 7px;
  background-color: white;
  display: grid;
  grid-gap: 4px;
  grid-template: 31px 14px 40px / 1fr 1fr 2fr 2fr 1.5fr;
  font-size: 0.9em;
`;

const EventContent = () => (
  <EventContentWrapper id='Event-Content-Grid' >
          <LiveScore id='LiveScore'>
            <Score>1-0</Score>
            <Time>1°T</Time>
          </LiveScore>
          <EventName id='Event-Name'>Atalanta - Brescia</EventName>
          <div
            style={{
              gridColumn:'5/6',
              gridRow: '1/2',
              display: 'flex',
              justifyContent:'flex-end',
              alignItems: 'center'
            }}
          >
          <ArrowRight width={'12px'} height={'12px'}  margin={'5px 10px 0 0'}/>
          </div>
          <GameName>ESITO FINALE 1X2</GameName>
          <GameOutcome gridColumn={'1/3'}>
            <OutcomeValue>1</OutcomeValue>
            <OutcomeOdd>1.09</OutcomeOdd>
          </GameOutcome>
          <GameOutcome gridColumn={'3/4'}>
            <OutcomeValue>X</OutcomeValue>
            <OutcomeOdd>2.80</OutcomeOdd>
          </GameOutcome>
          <GameOutcome gridColumn={'4/5'}>
            <OutcomeValue>2</OutcomeValue>
            <OutcomeOdd>2.25</OutcomeOdd>
          </GameOutcome>
          <EventContentGameAccordionTrigger gridColumn={'5/6'}>
            <HasMoreText>Altri esiti</HasMoreText>
            <HasMoreNumberArrowDown>+39</HasMoreNumberArrowDown>
          </EventContentGameAccordionTrigger>
  </EventContentWrapper>  
);

export default EventContent;
