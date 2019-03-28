import * as React from 'react';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';

import Wrapper from './Wrapper';
import BetslipBodyItems from './BetslipBodyItems';
import BetslipSubhead from './BetslipSubhead';
import InfoAlert from '../InfoAlert';
import InfoIcon from '../InfoIcon';
import AvvenimentoCancellato from '../AvvenimentoCancellato';

export interface Props {
    content: ITicketBodyContent;
}


const TicketBody: React.FC<Props> = ({ content }) => {
    const { sistema, pronosticoList } = content;
    return (
        <Wrapper>
            {sistema
                ? <InfoAlert>
                    <InfoIcon />
                    Per giocare un sistema inserisci almeno 2 esiti
            </InfoAlert>
                : null
            }
            <BetslipSubhead> Cancella tutto </BetslipSubhead>
            <TicketBodyItems sistema={sistema} pronosticoList={pronosticoList} />
            <AvvenimentoCancellato />
        </Wrapper>
    );
}

export default BetslipBody;