import * as React from 'react';
import styled from 'src/theme/default/index';

import { OtherEventsTab } from 'src/components/OtherEvents/otherEventsTabs';
import Wrapper from './Wrapper';

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
interface IOtherEventsTabsProps {
    otherEventsTabs: OtherEventsTab[]
}

const OtherEventsTabs = (props: IOtherEventsTabsProps) => (
    <Wrapper>
        {props.otherEventsTabs.map(el =>
            <OtherEventsTab key={el.label} isTabActive={el.isTabActive}>{el.label}</OtherEventsTab>
        )}
    </Wrapper>
);

export default OtherEventsTabs;

