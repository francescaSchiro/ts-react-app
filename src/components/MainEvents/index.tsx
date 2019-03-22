import * as React from 'react';

import MainEventsTabs from 'src/components/MainEventsTabs';
import MainEventsSports from 'src/components/MainEventsSports';
import Redirect from 'src/components/Redirect';
import MainEventsLeagues from 'src/components/MainEventsLeagues';
import { IMainEventsTab } from 'src/models/IMainEventsTab';
import { ISport } from 'src/models/ISport';

import Wrapper from './Wrapper';

interface Props {
  tabs: IMainEventsTab[],
};
interface State {
  currentTab: IMainEventsTab,
  currentSport: ISport,
};

class MainEvents extends React.Component<Props, State> {
  public state: State = {
    currentTab: this.props.tabs[0],
    currentSport: this.props.tabs[0].sports[0],
  }
  public render() {
    const { tabs } = this.props;
    const { sports } = this.state.currentTab;
    const { leagues } = this.state.currentSport;
    return (
      <Wrapper>
        <MainEventsTabs tabs={tabs} />
        <MainEventsSports sports={sports} onSportClick={this.selectSport} />
        <Wrapper>
          <MainEventsLeagues leagues={leagues} />
        </Wrapper>
        <Redirect />
      </Wrapper>
    )
  }
  private selectSport = (e: any, clickedSport: ISport) => {
    e.stopPropagation();
    this.setState({ currentSport: clickedSport })
  }
};

export default MainEvents;
