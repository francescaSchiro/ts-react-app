import * as React from 'react';

import Wrapper from './Wrapper';
import Buttons from '../Ticket/Buttons';
import BetslipBody from '../Ticket/BetslipBody';
import SettingsDefaultBlock from '../Ticket/SettingsDefaultBlock';
import BetslipDevelop from '../Ticket/BetslipDevelop';
import InfoAlert from '../Ticket/InfoAlert';
import InfoIcon from '../Ticket/InfoIcon';
import BetslipFooterRow from '../Ticket/BetslipFooterRow';


const TicketSistema = () => (
    <Wrapper>
        <BetslipBody sistema={true} />
        <SettingsDefaultBlock />
        <BetslipDevelop />
        <InfoAlert error={true}>
            <InfoIcon />
            Importo minimo non rispettato per la giocata sistemistica.
        </InfoAlert>
        <BetslipFooterRow />
        <Buttons />
    </Wrapper>
);

export default TicketSistema;