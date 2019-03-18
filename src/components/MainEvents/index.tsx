import * as React from 'react';

import Wrapper from './Wrapper';
import MainEventsTabs from 'src/components/MainEventsTabs';

import Redirect from '../Redirect';

import EventsContainer from './EventsContainer';
import SportsContainer from './SportsContainer';
import SportsTab from './SportsTab';

import sportTabItems from './sportsTabItems';
import EventLeague from './EventLeague';
import EventContent from './EventContent';
import HR from '../HR';


class MainEvents extends React.Component {
  public render() {
    return (
      <Wrapper>
        <MainEventsTabs />
        {/* Sports Tabs */}

        <SportsContainer>
          {sportTabItems.map((el, i) => (
            <SportsTab key={i} active={el.active}>
              {el.label}
            </SportsTab>
          ))}
        </SportsContainer>

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
};

export default MainEvents;
