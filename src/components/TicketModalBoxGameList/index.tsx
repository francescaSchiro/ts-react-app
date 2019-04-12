import * as React from 'react';

import Wrapper from './Wrapper';
import GameName from './GameName';
import GameOutcomes from './GameOutcomes';
import GameOutcome from './GameOutcome';
import Value from './Value';
import Odd from './Odd';


const TicketModalBoxGameList = () => (
    <Wrapper>
        <GameName>ESITO FINALE 1x2</GameName>
        <GameOutcomes>
            <GameOutcome selected={true}>
                <Value>1</Value>
                <Odd>2.00</Odd>
            </GameOutcome>
            <GameOutcome selected={false}>
                <Value>X</Value>
                <Odd>3.50</Odd>
            </GameOutcome>
            <GameOutcome selected={true}>
                <Value>2</Value>
                <Odd>3.20</Odd>
            </GameOutcome>
        </GameOutcomes>
    </Wrapper>
);

export default TicketModalBoxGameList;