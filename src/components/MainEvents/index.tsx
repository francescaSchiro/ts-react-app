import * as React from 'react';

import MainEventsTabs from 'src/components/MainEventsTabs';
import MainEventsSports from 'src/components/MainEventsSports';
import Redirect from 'src/components/Redirect';
import MainEventsLeagues from 'src/components/MainEventsLeagues';
import Wrapper from './Wrapper';
import mainEventsLeagues from './mainEventsLeagues';
import mainEventsSports from './mainEventsSports';
import mainEventsTabs from './mainEventsTabs';

const MainEvents = () => (
  <Wrapper>
    <MainEventsTabs mainEventsTabs={mainEventsTabs} />
    <MainEventsSports mainEventsSports={mainEventsSports} />
    <Wrapper>
      <MainEventsLeagues mainEventsLeagues={mainEventsLeagues} />
    </Wrapper>
    <Redirect />
  </Wrapper>
);

export default MainEvents;
