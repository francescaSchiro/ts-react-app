import * as React from 'react';

import Wrapper from './Wrapper';
import BetExtra from './BetExtra';
import BetData from './BetData';
import BetActions from './BetActions';
import BetDetail from './BetDetail';
import InfoTimezone from './InfoTimezone';
import Title from './Title';
import Info from './Info';
import Game from './Game';
import DeleteIcon from './DeleteIcon';
import MicroGame from './MicroGame';


const BetslipBodyItem = () => (
    <Wrapper>

        <BetData>
            <BetExtra />
            <BetDetail>
                <InfoTimezone>29091 - 6099 | 27/2/2019 ore 21:00</InfoTimezone>
                <Title>Fiorentina - Atalanta</Title>
                <Info>
                    <Game>
                        <DeleteIcon /> Esito finale 1x2: <span style={{ fontWeight: 'bold' }}>2 (-)</span></Game>
                    <MicroGame>Esito chiuso o sospeso</MicroGame>
                </Info>
            </BetDetail>
        </BetData>

        <BetActions />

    </Wrapper>
);

export default BetslipBodyItem;