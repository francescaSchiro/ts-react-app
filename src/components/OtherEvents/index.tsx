import * as React from 'react';
import styled from 'src/theme/default/index';

import OtherEventsTabs from 'src/components/OtherEventsTabs';
import OtherEventsLeagues from 'src/components/OtherEventsLeagues';
import { IOtherEventsTab } from 'src/models/IOtherEventsTab';

import Wrapper from './Wrapper';


interface Props {
  tabs: IOtherEventsTab[],
}

interface State {
  currentTab: IOtherEventsTab,
}

class OtherEvents extends React.Component<Props, State> {
  public state = {
    currentTab: this.props.tabs[0],
  };
  public render() {
    const { tabs } = this.props;
    const { currentTab } = this.state;
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Top Manifestazioni</Title>
        </TitleWrapper>
        <OtherEventsTabs tabs={tabs} currentTab={currentTab} onTabClick={this.selectTab} />
        <OtherEventsLeagues leagues={currentTab.leagues} />
      </Wrapper>
    );
  }
  private selectTab = (tab: IOtherEventsTab) => {
    this.setState({ currentTab: tab })
  }
};

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

export default OtherEvents;

