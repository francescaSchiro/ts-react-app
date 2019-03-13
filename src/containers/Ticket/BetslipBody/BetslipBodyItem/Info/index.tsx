import * as React from 'react';

import Wrapper from './Wrapper';
import Game from './Game';
import MicroGame from './MicroGame';
import Odd from './Odd';
import DeleteIcon from 'src/containers/Ticket/DeleteIcon';
import OddChange from './OddChange';




class Info extends React.Component {
    public render() {
        return (

            <Wrapper>
                <Game>
                    <DeleteIcon display={true} />
                    Esito finale 1x2:
                    <Odd>
                        2 (-)
                        <OddChange>(1.28)</OddChange>
                    </Odd>
                </Game>
                <MicroGame>Esito chiuso o sospeso</MicroGame>
            </Wrapper>
        )
    }
}


export default Info;