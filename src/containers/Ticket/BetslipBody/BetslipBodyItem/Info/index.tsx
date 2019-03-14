import * as React from 'react';

import Wrapper from './Wrapper';
import Game from './Game';
import MicroGame from './MicroGame';
import Odd from './Odd';
import DeleteIcon from 'src/containers/Ticket/DeleteIcon';
import OddChange from './OddChange';


/* incoming newOddValue + oddState @ checkOddState time interval: => 
setState({
    oldOddValue= this.state.currentOddValue,
    currentOddValue = newOddValue (incoming one)
})
oddState: number {
    -10: negative, 
    0: closed, 
    1: same, 
    10: positive 
}
currentOddValue: number 
oldOddValue: number // to print both in content string: `Quota cambiata da ${oldOddValue} a ${newOddValue}`
*/

class Info extends React.Component {
    public render() {
        return (

            <Wrapper>
                <Game>
                    <DeleteIcon display={true} />
                    Esito finale 1x2:
                    <Odd>
                        2 (-)
                        <OddChange change={'positive'}>(1.28)</OddChange>
                    </Odd>
                </Game>
                <MicroGame>Esito chiuso o sospeso</MicroGame>
            </Wrapper>
        )
    }
}


export default Info;