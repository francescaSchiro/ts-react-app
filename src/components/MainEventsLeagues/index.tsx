import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import MainEventsEvent from 'src/components/MainEventsEvent';
import { MainEventsLeague } from '../MainEvents/mainEventsLeagues';

interface IMainEventsLeaguesProps {
    leagues: MainEventsLeague[]
}

const MainEventsLeagues = (props: IMainEventsLeaguesProps) => (
    <>
        {props.leagues.map(el =>
            <Wrapper key={el.leagueLabel}>

                <League leagueIconUrl={el.leagueIconUrl}>{el.leagueLabel}</League>
                <MainEventsEvent events={el.leagueEvents} />
            </Wrapper>
        )}
    </>
);

export default MainEventsLeagues;


interface ILeagueProps {
    leagueIconUrl: string,
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
  background-image: url(${(props: ILeagueProps) => props.leagueIconUrl});
  width: 20px;
  height: 20px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  
  margin-right: 0.5em;
}
`