import * as React from 'react';

import HomePageWrapper from './Wrapper';
import Title from '../Title';
import BestEventsWrapper from './BestEventsWrapper';
import MainEvents from '../MainEvents';
import OtherEvents from '../OtherEvents';
import TitleWrapper from './TitleWrapper';
import BestEventWrapper from './BestEventWrapper';
import BestEventInfoLeague from './BestEventInfoLeague';
import FirstWin from './FirstWin';
import Tie from './Tie';
import SecondWin from './SecondWin';
import BestEventTime from './BestEventTime';
import BestEventData from './BestEventData';
import Icon from './Icon';
import FirstWinValue from './FirstWinValue';
import TieValue from './TieValue';
import SecondWinValue from './SecondWinValue';

const HomePage = () => (
  <HomePageWrapper id='HomePageWrapper'>
    <TitleWrapper>
      <Title>Incontri principali</Title>
    </TitleWrapper>
    <BestEventsWrapper>
      {/* 1st card */}
      <BestEventWrapper>
        <BestEventInfoLeague>
          <Icon />
          INT Champions League{' '}
        </BestEventInfoLeague>
        <FirstWin>1</FirstWin>
        <Tie>X</Tie>
        <SecondWin>2</SecondWin>
        <BestEventTime>
          <div style={{ fontWeight: 700 }}>Mer</div>
          <div>18:55</div>
        </BestEventTime>
        <BestEventData>Real Madrid - CSKA Mosca</BestEventData>
        <FirstWinValue>1,25</FirstWinValue>
        <TieValue>5,90</TieValue>
        <SecondWinValue>12,50</SecondWinValue>
      </BestEventWrapper>
      {/* 2nd card */}
      <BestEventWrapper>
        <BestEventInfoLeague>
          <Icon />
          INT Champions League{' '}
        </BestEventInfoLeague>
        <FirstWin>1</FirstWin>
        <Tie>X</Tie>
        <SecondWin>2</SecondWin>
        <BestEventTime>
          <div style={{ fontWeight: 700 }}>Mer</div>
          <div>18:55</div>
        </BestEventTime>
        <BestEventData>Real Madrid - CSKA Mosca</BestEventData>
        <FirstWinValue>1,25</FirstWinValue>
        <TieValue>5,90</TieValue>
        <SecondWinValue>12,50</SecondWinValue>
      </BestEventWrapper>
      {/* 3d card */}
      <BestEventWrapper>
        <BestEventInfoLeague>
          <Icon />
          INT Champions League
        </BestEventInfoLeague>
        <FirstWin>1</FirstWin>
        <Tie>X</Tie>
        <SecondWin>2</SecondWin>
        <BestEventTime>
          <div style={{ fontWeight: 700 }}>Mer</div>
          <div>18:55</div>
        </BestEventTime>
        <BestEventData>Real Madrid - CSKA Mosca</BestEventData>
        <FirstWinValue>1,25</FirstWinValue>
        <TieValue>5,90</TieValue>
        <SecondWinValue>12,50</SecondWinValue>
      </BestEventWrapper>
    </BestEventsWrapper>
    <MainEvents />
    <OtherEvents />
  </HomePageWrapper>
);

export default HomePage;
