import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import OtherEventsTabs from 'src/components/OtherEventsTabs';
import OtherEventsLeagues from 'src/components/OtherEventsLeagues';
import otherEventsTabs from './otherEventsTabs';
import otherEventsLeagues from './otherEventsLeagues';


const TitleWrapper = styled.div`
  width: auto;
  min-height: 20px; 
  padding: 10px 0 10px 0;
  text-align: center;
`;
const Title = styled.p`
  font-size: 15px;
  color: #777;
  font-weight: 700;
  white-space:normal;
`;

const OtherEvents = () => (
  <Wrapper>
    <TitleWrapper>
      <Title>Top Manifestazioni</Title>
    </TitleWrapper>
    <OtherEventsTabs otherEventsTabs={otherEventsTabs} />
    <OtherEventsLeagues otherEventsLeagues={otherEventsLeagues} />
  </Wrapper>
);

export default OtherEvents;

