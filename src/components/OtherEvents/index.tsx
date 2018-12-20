import * as React from 'react';

import OtherEventsWrapper from './Wrapper';
import Title from '../Title';
import TitleWrapper from '../TitleWrapper';
import TabsContainer from './TabsContainer';
import Tab from './Tab';
import ArrowRight from '../ArrowRight';
import LeagueFlag from './LeagueFlag';
import LeagueContainer from './LeagueContainer';
import LeagueLabel from './LeagueLabel';

const OtherEvents = () => (
  <OtherEventsWrapper>

    <TitleWrapper id='Title-Wrapper'  padding={'10px 0 0 0'}>
      <Title fontColor={'#777'}>Top Manifestazioni</Title>
    </TitleWrapper>

    <TabsContainer>
      <Tab active={true}>Calcio</Tab>
      <Tab active={false}>Tennis</Tab>
      <Tab active={false}>Basket</Tab>
    </TabsContainer>

    <LeagueContainer>
      <LeagueLabel>
        <LeagueFlag /> INT Champions League
      </LeagueLabel>
      <ArrowRight width={'10px'} height={'10px'} margin={'0 10px 0 0'} />
    </LeagueContainer>

    <LeagueContainer>
      <LeagueLabel>
        <LeagueFlag /> INT Champions League
      </LeagueLabel>
      <ArrowRight width={'10px'} height={'10px'} margin={'0 10px 0 0'} />
    </LeagueContainer>

    <LeagueContainer>
      <LeagueLabel>
        <LeagueFlag /> INT Champions League
      </LeagueLabel>
      <ArrowRight width={'10px'} height={'10px'} margin={'0 10px 0 0'} />
    </LeagueContainer>
    
  </OtherEventsWrapper>
);

export default OtherEvents;
