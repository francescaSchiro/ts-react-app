import * as React from 'react';
import styled from 'src/theme/default/index';


import Wrapper from './Wrapper';
import { MainEventTab } from 'src/components/MainEvents/mainEventsTabs';

interface IMainEventsTabsProps {
    mainEventsTabs: MainEventTab[],
};

const MainEventsTabs = (props: IMainEventsTabsProps) => (
    <Wrapper>
        {props.mainEventsTabs.map(el => (
            <MainEventTab
                isTabActive={el.isTabActive}
                tabName={el.tabName}
            >{el.tabName}
            </MainEventTab>))
        }
    </Wrapper>
);

export default MainEventsTabs;

interface IMainEventTabProps {
    isTabActive: boolean,
    tabName: string,
}

const MainEventTab = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 50%;
    background-color: ${(props: IMainEventTabProps) => props.isTabActive ? 'white' : 'transparent'};
    font-weight: bold;
    text-transform: uppercase;

    ${(props: IMainEventTabProps) => props.isTabActive
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

