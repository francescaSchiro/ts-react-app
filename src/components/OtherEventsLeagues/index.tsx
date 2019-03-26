import * as React from 'react';
import styled from 'src/theme/default/index';

import { ILeague } from 'src/models/ILeague';

import Wrapper from './Wrapper';



interface Props {
    leagues: ILeague[]
}

const OtherEventsLeagues: React.FC<Props> = ({ leagues }) => (
    <>
        {leagues.map((league: ILeague) =>
            <Wrapper key={league.name}>
                <LeagueLabel>
                    <LeagueFlag iconUrl={league.iconUrl} />
                    {league.name}
                </LeagueLabel>
                <ArrowRight />
            </Wrapper>
        )
        }
    </>
);

const LeagueLabel = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.1em;
`;
interface ILeagueFlagProps {
    iconUrl: string,
}

const LeagueFlag = styled.span`
  background-image: url(${(props: ILeagueFlagProps) => props.iconUrl});
  min-width: 35px;
  min-height: 20px;
  margin-right: 10px;
  /* margin-left: 5px; */
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;
`;

const ArrowRight = styled.div`
  width: 10px;
  height: 10px;
  border-right: 2px solid #4a4a4a;
  border-bottom: 2px solid #4a4a4a;
  transform: rotate(-45deg);
  margin: 0 10px 0 0;
`;

export default OtherEventsLeagues;

