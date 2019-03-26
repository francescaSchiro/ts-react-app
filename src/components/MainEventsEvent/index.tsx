import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import { IEvent } from 'src/models/IEvent';

interface Props {
    events: IEvent[]
}

const MainEventsEvent: React.FC<Props> = ({ events }) => (
    <>
        {events.map((e: IEvent) => (
            <>
                <Wrapper key={e.id}>
                    <LiveScore>
                        <Score>{e.score}</Score>
                        <Time>{e.time}</Time>
                    </LiveScore>
                    <EventName streaming={e.streaming}>{e.eventName}</EventName>
                    <div
                        id='ArrowRightWrapper'
                        style={{
                            gridColumn: '5/6',
                            gridRow: '1/2',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}
                    >
                        <ArrowRight />
                    </div>
                    <GameName>{e.gameName}</GameName>
                    <GameOutcome gridColumn={'1/3'}>
                        <OutcomeValue>{e.oddLabels[0]}</OutcomeValue>
                        <OutcomeOdd>{e.oddValues[0]}</OutcomeOdd>
                    </GameOutcome>
                    <GameOutcome gridColumn={'3/4'}>
                        <OutcomeValue>{e.oddLabels[1]}</OutcomeValue>
                        <OutcomeOdd>{e.oddValues[1]}</OutcomeOdd>
                    </GameOutcome>
                    <GameOutcome gridColumn={'4/5'}>
                        <OutcomeValue>{e.oddLabels[2]}</OutcomeValue>
                        <OutcomeOdd>{e.oddValues[2]}</OutcomeOdd>
                    </GameOutcome>
                    <EventContentGameAccordionTrigger gridColumn={'5/6'}>
                        <HasMoreText>Altri esiti</HasMoreText>
                        <HasMoreNumberArrowDown>+{e.moreGamesNumber}</HasMoreNumberArrowDown>
                    </EventContentGameAccordionTrigger>
                </Wrapper>
            </>
        ))}
    </>
);

export default MainEventsEvent;

const LiveScore = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Score = styled.div`
     grid-column: 1 / 2;
     grid-row: 1 / 2;   
     display:flex;
     justify-content:center;
     align-items: center;
     color: black;
     background-color: #f7a81e;
     font-weight: bold;
     font-size: 1.1em;
     padding-top:2px;
     height: 51%;
`;
const Time = styled.div`
    color: white;
    background-color: black;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 0.9em;
    line-height: 1.5em;
    letter-spacing: .1em;
    padding-top:1px;
`;

interface IEventName {
    streaming: boolean,
};

const EventName = styled.div`
    position: relative;
    grid-column: 2 / 5;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: black;
    font-weight: bold;
    font-size: 1.2em;
    padding: 0 4px;
    white-space: normal;
    word-wrap:break-word;
    line-height: 1.2em;
    ${(props: IEventName) => props.streaming
        ? `&::after {
                position: absolute;
                content:'';
                width: 16px;
                height: 16px;
                top: 17%;
                right: 4%;
                background-image: url('https://image.flaticon.com/icons/png/512/31/31106.png');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: contain;
            }`
        : null
    };
`;

const ArrowRight = styled.div`
    width: 12px;
    height: 12px;
    border-right: 2px solid #4a4a4a;
    border-bottom: 2px solid #4a4a4a;
    transform: rotate(-45deg);
    margin: 5px 10px 0 0;
`;

const GameName = styled.div`
    grid-column: 1 / 5;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: black;
    font-weight: normal;
    font-size: .9em;
    padding: 0 4px;
    white-space: normal;
    word-wrap:break-word;
    line-height: 1.2em;
`;
interface IGameOutcomeProps {
    gridColumn: string,
};

const GameOutcome = styled.div`
    grid-column: ${(props: IGameOutcomeProps) => props.gridColumn};
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: black;
    padding: 3px 0;
    background-color: #eaeaea;
    box-shadow: inset 0 -1px rgba(0,0,0,.05);
    border-radius: 2px;
`;

const OutcomeValue = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align:center;
    align-items: center;
    color: black;
    background-color: #eaeaea;
    font-weight: normal;
    font-size: .9em;
    height: 50%;
    width: 100%;
`;

const OutcomeOdd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: #eaeaea;
    font-weight: bold;
    font-size: 1.3em;
    height: 50%;
    width: 100%;
`;
interface IEventContentGameAccordionTriggerProps {
    gridColumn: string,
}
const EventContentGameAccordionTrigger = styled.div`
    grid-column:  ${(props: IEventContentGameAccordionTriggerProps) => props.gridColumn};
    grid-row: 3 / 4;

    margin-left: 12px;
    display: flex;
    padding: 4px;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    color: #000;
    border: 1px solid #4a4a4a;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
`;

const HasMoreText = styled.div`
    color: black;
    font-size: .9em;
    margin-bottom: 5px;
    white-space: nowrap;
`;

const HasMoreNumberArrowDown = styled.div`
    color: black;
    font-size: 1.1em;
    margin-left: -12px;
    padding-right: 3px;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 4px;
        right: -15px;
        border-right: 1px solid #4a4a4a;
        border-bottom: 1px solid #4a4a4a;
        width: 7px;
        height: 7px;
        transform: translate(-50%,-50%) rotate(45deg);
    }
`;
