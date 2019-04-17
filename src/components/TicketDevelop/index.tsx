import * as React from 'react';

import TicketInfoAlert from 'src/components/TicketInfoAlert';
import TicketDevelopItem from 'src/components/TicketDevelopItem';

import Wrapper from './Wrapper';


const TicketDevelop: React.FC = () => (
    <>
        <Wrapper>
            <TicketDevelopItem />
            <TicketDevelopItem />
        </Wrapper>
        <TicketInfoAlert
            error={true}
            message={'Importo minimo non rispettato per la giocata sistemistica.'}
            infoIconUrl={'https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8'}
        />
    </>
);



export default TicketDevelop;

