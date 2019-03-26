import * as React from 'react';
import styled from 'src/theme/default/index';

import MainEventsEvent from 'src/components/MainEventsEvent';
import { ILeague } from 'src/models/ILeague';

import Wrapper from './Wrapper';


interface Props {
    leagues: ILeague[],
};

const MainEventsLeagues: React.FC<Props> = ({ leagues }) => (
    <>
        {leagues.map(league =>
            <Wrapper key={league.id}>
                <League iconUrl={league.iconUrl}>{league.name}</League>
                <MainEventsEvent events={league.events} />
            </Wrapper>
        )}
    </>
);

interface ILeagueProps {
    iconUrl: string,
}

const League = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 25px;
    padding: 0 .5em;
    background-color: #989898;
    color: #fff;

    &::before {
        content: '';
        background-image: url(${(props: ILeagueProps) => props.iconUrl});
        width: 20px;
        height: 20px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        
        margin-right: 0.5em;
    };
`

export default MainEventsLeagues;