import * as React from 'react';
import styled from 'src/theme/default/index';


import Wrapper from './Wrapper';
import { IMainEventsTab } from 'src/models/IMainEventsTab';

interface Props {
    tabs: IMainEventsTab[],
};

const MainEventsTabs: React.FC<Props> = ({ tabs }) => (
    <Wrapper>
        {tabs.map((tab: IMainEventsTab) => (
            <MainEventTab
                isActive={tab.isActive}
                name={tab.name}
            >{tab.name}
            </MainEventTab>))
        }
    </Wrapper>
);

export default MainEventsTabs;

interface IMainEventTabProps {
    isActive: boolean,
    name: string,
}

const MainEventTab = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 50%;
    background-color: ${(props: IMainEventTabProps) => props.isActive ? 'white' : 'transparent'};
    font-weight: bold;
    text-transform: uppercase;

    ${(props: IMainEventTabProps) => props.isActive
        ? getActiveStyle(props.name)
        : `
        border-top: 5px solid #cbcbcb;
        color: #777;
        `
    }
`;

const getActiveStyle = (name: string) => {
    switch (name) {
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

