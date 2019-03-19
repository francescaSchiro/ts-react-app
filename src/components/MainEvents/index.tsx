import * as React from 'react';

import Wrapper from './Wrapper';
import MainEventsTabs from 'src/components/MainEventsTabs';
import MainEventsSports from 'src/components/MainEventsSports';


import Redirect from '../Redirect';

import MainEventsLeagues from 'src/components/MainEventsLeagues';
import mainEventsLeagues, { MainEventsLeague } from './mainEventsLeagues';


interface IMainEventsState {
  leagues: MainEventsLeague[]
}
class MainEvents extends React.Component<{}, IMainEventsState> {
  public state = {
    leagues: mainEventsLeagues
  }
  public render() {
    const { leagues } = this.state;
    return (
      <Wrapper>
        <MainEventsTabs />
        <MainEventsSports />
        <Wrapper>
          <MainEventsLeagues leagues={leagues} />
        </Wrapper>

        <Redirect />
      </Wrapper>

    )
  }
};

export default MainEvents;
