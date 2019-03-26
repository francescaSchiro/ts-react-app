import * as React from 'react';
import styled from 'src/theme/default/index';

import { IOtherEventsTab } from 'src/models/IOtherEventsTab';

import Wrapper from './Wrapper';


interface Props {
    tabs: IOtherEventsTab[],
    currentTab: IOtherEventsTab,
    onTabClick: (tab: IOtherEventsTab) => void,
}

const OtherEventsTabs: React.FC<Props> = ({ tabs, currentTab, onTabClick }) => (
    <Wrapper>
        {tabs.map((tab: IOtherEventsTab) =>
            <OtherEventsTab key={tab.name} isTabActive={currentTab === tab} onClick={onTabClick.bind(null, tab)}>{tab.name}</OtherEventsTab>
        )}
    </Wrapper>
);
interface IOtherEventsTabProps {
    isTabActive: boolean,
}
const OtherEventsTab = styled.div`
    border-top: ${(props: IOtherEventsTabProps) => props.isTabActive ? '5px solid #0C468D' : '5px solid #cbcbcb'};
    display:flex;
    justify-content: center;
    align-items: center;
    flex:1;
    font-size:1.1em;
    font-weight: 600;
    color:  ${(props: IOtherEventsTabProps) => props.isTabActive ? 'black' : '#777'};
    background-color: ${(props: IOtherEventsTabProps) => props.isTabActive ? 'white' : 'transparent'};
    text-transform: capitalize;
`;

export default OtherEventsTabs;

