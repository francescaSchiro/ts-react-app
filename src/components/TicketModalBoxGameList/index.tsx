import * as React from 'react';
import styled from 'src/theme/default/index';


import { IGameListItem } from 'src/models/IGameListItem';

import Wrapper from './Wrapper';


interface Props {
    descrizioneScommessa: string,
    gameListItems: IGameListItem[],
};

const TicketModalBoxGameList: React.FC<Props> = ({ descrizioneScommessa, gameListItems }) => {
    return (
        <Wrapper>
            <GameName>{descrizioneScommessa}</GameName>
            <GameOutcomes>
                {gameListItems.map(item => {
                    const { selected, label, quota } = item;
                    return (
                        <GameOutcome key={label} selected={selected}>
                            <Label>{label}</Label>
                            <Odd>{quota / 100}</Odd>
                        </GameOutcome>)
                })}
            </GameOutcomes>
        </Wrapper>
    );
};

const GameName = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    font-size: 10px;
    padding: 8px 13px;
    color: black;
    text-transform: uppercase;
`;

const Label = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size:11px;
`;
const Odd = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size:14px;
`;
const GameOutcomes = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 10px;
    padding: 8px;
    color: black;
`;
interface IGameOutcomesProps {
    selected?: boolean,
};
const GameOutcome = styled.div`
    height: 40px;    
    flex-grow:1;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    background-color: ${(props: IGameOutcomesProps) => props.selected ? '#f7a81e' : '#eaeaea'};
    box-shadow: inset 0 -1px rgba(0,0,0,.05);
    padding: 4px;
    margin: 0 1%;
`;

export default TicketModalBoxGameList;