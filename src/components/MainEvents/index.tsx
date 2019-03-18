import * as React from 'react';

import Wrapper from './Wrapper';
import MainEventsTabs from 'src/components/MainEventsTabs';
import MainEventsSports from 'src/components/MainEventsSports';

import Redirect from '../Redirect';

import EventsContainer from './EventsContainer';

import EventLeague from './EventLeague';
import EventContent from './EventContent';
import HR from '../HR';

// interface IMainEventsState {
//   mainEventsTab: string, // 'live' | 'pre match'
//   mainEventsSportTab: string,  // 'calcio' | 'tennis' | 'basket' | 'volley'
//   events: Event[],
// }

class MainEvents extends React.Component<{}, {}> {
  // public state = {
  //   mainEventsTab: 'live',
  //   mainEventsSportTab: 'calcio',
  //   events: [],
  // }
  public render() {
    return (
      <Wrapper>
        <MainEventsTabs />
        <MainEventsSports />

        {/*Main-Events-Body*/}
        <Wrapper>
          {/* 1st league */}
          <EventsContainer>
            <EventLeague>ITA Serie C</EventLeague>
            <EventContent />
            <HR />
            {/* second event */}
            <EventContent />
          </EventsContainer>
          {/* 2nd league */}
          <EventsContainer>
            <EventLeague>ITA Serie B</EventLeague>
            <EventContent />
            <HR />
            {/* second event */}
            <EventContent />
            <HR />
          </EventsContainer>
        </Wrapper>
        <Redirect />
      </Wrapper>

    )
  }
  // private toggleMainEventsTab = () => {
  //   this.setState({ mainEventsTab: tabName })
  // }
};

export default MainEvents;
