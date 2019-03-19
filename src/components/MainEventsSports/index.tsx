import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import { MainEventSport } from 'src/components/MainEvents/mainEventsSports';

interface IMainEventsSportsProps {
    mainEventsSports: MainEventSport[],
};

const MainEventsSports = (props: IMainEventsSportsProps) => (
    <Wrapper>
        {props.mainEventsSports.map((el, i) => (
            <MainEventsSportsItem key={i} isActive={el.isActive}>
                {el.sportName}
            </MainEventsSportsItem>
        ))}
    </Wrapper>
);

export default MainEventsSports;

interface IMainEventsSportsItemProps {
    isActive: boolean;
}

const MainEventsSportsItem = styled.div`
display: flex;
justify-content: center;
align-items: center;

background-color: ${(props: IMainEventsSportsItemProps) => (props.isActive ? '#f6a81e' : 'transparent')};
border-radius: 20px;
padding: 3px 15px;

color: black;
font-weight: bold;
text-transform: capitalize;
`;
