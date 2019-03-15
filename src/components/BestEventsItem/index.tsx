
import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const BestEventsItem = () => (
    <Wrapper>
        <League>
            <Icon />
            INT Champions League{' '}
        </League>
        <GameLabel gridColumn={'7/8'}>1</GameLabel>
        <GameLabel gridColumn={'8/9'}>X</GameLabel>
        <GameLabel gridColumn={'9/10'}>2</GameLabel>
        <TimeInfo>
            <div style={{ fontWeight: 700, paddingBottom: '2px' }}>Mer</div>
            <div>18:55</div>
        </TimeInfo>
        <GameName>Real Madrid - CSKA Mosca</GameName>
        <OddValue gridColumn={'7/8'}>1,25</OddValue>
        <OddValue gridColumn={'8/9'}>5,90</OddValue>
        <OddValue gridColumn={'9/10'}>12,50</OddValue>
    </Wrapper>
);

export default BestEventsItem;

const Icon = styled.div`
  width: 15px;
  height: 15px;
  margin-right: .5em;
  background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/699915-icon-6-soccer-ball-512.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const League = styled.div`
  grid-column: 1 / 7;
  grid-row: 1 / 2;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 .5em;
  color: white;
  background-color: #222;  
`;

interface IGameLabelProps {
    gridColumn: string,
}

const GameLabel = styled.div`
    grid-column: ${(props: IGameLabelProps) => props.gridColumn};
    grid-row: 1 / 2;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    color: white;
    background-color: #909090;
    &:not(:last-child){
        border-right: 1px solid rgba(225,225,225, .4);
    }
`
const TimeInfo = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 4;

  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(225,225,225, .4);
  justify-content: center;
  align-items: center;
  font-size: .9em;
  padding: .5em;
  color: white;
  background-color: #186cb5;
`;

interface IOddValueProps {
    gridColumn: string,
}

const OddValue = styled.div`
    grid-column: ${(props: IOddValueProps) => props.gridColumn};
    grid-row: 2 / 4;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #222;
    padding: .5em;
    font-weight: 700;
    font-size: .9em;
    &:not(:last-child){
        border-right: 1px solid rgba(225,225,225, .4);
    }
`

const GameName = styled.div`
    grid-column: 2 / 7;
    grid-row: 2 / 4;

    min-width: 170px;
    white-space: normal;
    word-wrap:break-word;
    line-height: 1.2em;
    display: flex;
    flex-direction: row;
    border-right: 1px solid rgba(225,225,225, .4);
    justify-content: flex-start;
    align-items: center;
    padding: .5em;
    color: #222;
`




/*
- leagueLabel
- day
- time
- gameName
- gameLabels
- gameOdds
 */