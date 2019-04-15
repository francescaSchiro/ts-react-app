import * as React from 'react';

import TicketInfoAlert from 'src/components/TicketInfoAlert';

import Wrapper from './Wrapper';
import BetslipDevelopItem from './BetslipDevelopItem';


const TicketDevelopSistema = () => (
    <>
        <Wrapper>
            <BetslipDevelopItem />
            <BetslipDevelopItem />
        </Wrapper>
        <TicketInfoAlert
            error={true}
            message={'Importo minimo non rispettato per la giocata sistemistica.'}
            infoIconUrl={'https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8'}
        />
    </>
);


export default TicketDevelopSistema;

