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
import EditIcon from './EditIcon';
import MicroGame from './MicroGame';
import Odd from './Odd';
import Fixed from './Fixed';
import FixedCheckbox from './FixedCheckbox';
// import Span from './Span';

export interface BetslipBodyItem {
    sistema?: boolean;
    checked?: boolean;
}

const BetslipBodyItem = (props: BetslipBodyItem) => (
    <Wrapper>

        <BetData>
            <BetExtra>
                {props.sistema &&
                    <>
                        <Fixed checked={props.checked}>F</Fixed>
                        <FixedCheckbox checked={props.checked} />
                    </>
                }
            </BetExtra>
            <BetDetail>
                <InfoTimezone>29091 - 6099 | 27/2/2019 ore 21:00</InfoTimezone>
                <Title>Fiorentina - Atalanta</Title>
                <Info>
                    <Game>
                        <DeleteIcon display={true} />
                        Esito finale 1x2:
                        <Odd> 2 (-)</Odd>
                    </Game>
                    <MicroGame>Esito chiuso o sospeso</MicroGame>
                </Info>
            </BetDetail>
        </BetData>

        <BetActions>
            <DeleteIcon display={false} />

            <EditIcon />
        </BetActions>

    </Wrapper>
);

export default BetslipBodyItem;