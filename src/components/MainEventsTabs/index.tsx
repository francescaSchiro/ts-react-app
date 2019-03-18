import * as React from 'react';
import styled from 'src/theme/default/index';


import Wrapper from './Wrapper';
import mainEventsTabs from './mainEventsTabs';

// interface IMainEventsTabsProps {
//     onTabClick: () => void,
// }

const MainEventsTabs = () => (
    <Wrapper>
        {mainEventsTabs.map(el => (
            <Tab
                isTabActive={el.isTabActive}
                tabName={el.tabName}
            >{el.tabName}
            </Tab>))
        }
    </Wrapper>
);

export default MainEventsTabs;

interface Tab {
    isTabActive: boolean,
    tabName: string,
}

const Tab = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 50%;
    background-color: ${(props: Tab) => props.isTabActive ? 'white' : 'transparent'};
    font-weight: bold;
    text-transform: uppercase;

    ${(props: Tab) => props.isTabActive
        ? getActiveStyle(props.tabName)
        : `
        border-top: 5px solid #cbcbcb;
        color: #777;
        `
    }
`;

const getActiveStyle = (tabName: string) => {
    switch (tabName) {
        case 'live':
            return `
                border-top: 5px solid #f6a81e;
                color: #f6a81e;
            `;
        case 'pre match':
            return `
                background-color: white;
                border-top: 5px solid #0C468D;
                color: #0C468D;
            `;
        default:
            return `
                border-top: 5px solid #cbcbcb;
                color: #777;
            `
    }
};

