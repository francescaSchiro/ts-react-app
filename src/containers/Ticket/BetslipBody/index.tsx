import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipBodyItem from './BetslipBodyItem';
import BetslipSubhead from './BetslipSubhead';
import InfoAlert from '../InfoAlert';
import InfoIcon from '../InfoIcon';
import AvvenimentoCancellato from '../AvvenimentoCancellato';

export interface IBetslipBody {
    sistema?: boolean;
}


const BetslipBody = (props: IBetslipBody) => (
    <Wrapper>
        {props.sistema &&
            <InfoAlert>
                <InfoIcon />
                Per giocare un sistema inserisci almeno 2 esiti
            </InfoAlert>
        }
        <BetslipSubhead> Cancella tutto </BetslipSubhead>
        <BetslipBodyItem {...props} />
        <BetslipBodyItem {...props} />
        <BetslipBodyItem {...props} />
        <AvvenimentoCancellato />
    </Wrapper>
);

export default BetslipBody;