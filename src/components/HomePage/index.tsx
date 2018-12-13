import * as React from 'react';

import HomePageWrapper from './Wrapper';
import Title from '../Title';
import BestEventsWrapper from './BestEventsWrapper';
import MainEvents from '../MainEvents';
import OtherEvents from '../OtherEvents';
import TitleWrapper from './TitleWrapper';
import BestEventWrapper from './BestEventWrapper';
import BestEventInfoLeague from './BestEventInfoLeague';
import BestEventTime from './BestEventTime';
import BestEventData from './BestEventData';
import Icon from './Icon';
import BestEventGameItemLabel from './BestEventGameItemLabel';
import BestEventGameItemValue from './BestEventGameItemValue';

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
        <BestEventGameItemLabel gridColumn={'7/8'} rightBorder={true}>1</BestEventGameItemLabel>
        <BestEventGameItemLabel gridColumn={'8/9'} rightBorder={true}>X</BestEventGameItemLabel>
        <BestEventGameItemLabel gridColumn={'9/10'} rightBorder={false}>2</BestEventGameItemLabel>
        <BestEventTime>
          <div style={{  fontWeight: 700, paddingBottom: '2px'  }}>Mer</div>
          <div>18:55</div>
        </BestEventTime>
        <BestEventData>Real Madrid - CSKA Mosca</BestEventData>
        <BestEventGameItemValue gridColumn={'7/8'} rightBorder={true}>1,25</BestEventGameItemValue>
        <BestEventGameItemValue gridColumn={'8/9'} rightBorder={true}>5,90</BestEventGameItemValue>
        <BestEventGameItemValue gridColumn={'9/10'} rightBorder={false}>12,50</BestEventGameItemValue>
      </BestEventWrapper>
      {/* 2nd card */}
      <BestEventWrapper>
        <BestEventInfoLeague>
          <Icon />
          INT Champions League{' '}
        </BestEventInfoLeague>
        <BestEventGameItemLabel gridColumn={'7/8'} rightBorder={true}>1</BestEventGameItemLabel>
        <BestEventGameItemLabel gridColumn={'8/9'} rightBorder={true}>X</BestEventGameItemLabel>
        <BestEventGameItemLabel gridColumn={'9/10'} rightBorder={false}>2</BestEventGameItemLabel>
        <BestEventTime>
          <div style={{  fontWeight: 700, paddingBottom: '2px'  }}>Mer</div>
          <div>18:55</div>
        </BestEventTime>
        <BestEventData>Real Madrid - CSKA Mosca</BestEventData>
        <BestEventGameItemValue gridColumn={'7/8'} rightBorder={true}>1,25</BestEventGameItemValue>
        <BestEventGameItemValue gridColumn={'8/9'} rightBorder={true}>5,90</BestEventGameItemValue>
        <BestEventGameItemValue gridColumn={'9/10'} rightBorder={false}>12,50</BestEventGameItemValue>
      </BestEventWrapper>
      {/* 3d card */}
      <BestEventWrapper>
        <BestEventInfoLeague>
          <Icon />
          INT Champions League{' '}
        </BestEventInfoLeague>
        <BestEventGameItemLabel gridColumn={'7/8'} rightBorder={true}>1</BestEventGameItemLabel>
        <BestEventGameItemLabel gridColumn={'8/9'} rightBorder={true}>X</BestEventGameItemLabel>
        <BestEventGameItemLabel gridColumn={'9/10'} rightBorder={false}>2</BestEventGameItemLabel>
        <BestEventTime>
          <div style={{  fontWeight: 700, paddingBottom: '2px'  }}>Mer</div>
          <div>18:55</div>
        </BestEventTime>
        <BestEventData>Real Madrid - CSKA Mosca</BestEventData>
        <BestEventGameItemValue gridColumn={'7/8'} rightBorder={true}>1,25</BestEventGameItemValue>
        <BestEventGameItemValue gridColumn={'8/9'} rightBorder={true}>5,90</BestEventGameItemValue>
        <BestEventGameItemValue gridColumn={'9/10'} rightBorder={false}>12,50</BestEventGameItemValue>
      </BestEventWrapper>
    </BestEventsWrapper>
    <MainEvents />
    <OtherEvents />
  </HomePageWrapper>
);

export default HomePage;
