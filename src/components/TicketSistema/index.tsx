import * as React from 'react';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketButtons from 'src/components/TicketButtons';
import TicketBody from 'src/components/TicketBody';
import TicketSettings from 'src/components/TicketSettings';
import TicketDevelop from 'src/components/TicketDevelop';
import TicketFooterRow from 'src/components/TicketFooterRow';
import TicketInfoAlert from 'src/components/TicketInfoAlert';

import Wrapper from './Wrapper';

interface Props {
    content: ITicketBodyContent,
    sistema: boolean,
};

const TicketSistema: React.FC<Props> = ({ content, sistema }) => (
    <Wrapper>
        <TicketBody content={content} sistema={sistema} />
        <TicketSettings />
        <TicketDevelop />
        <TicketInfoAlert
            error={true}
            message={'Importo minimo non rispettato per la giocata sistemistica.'}
            infoIconUrl={'https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8'}
        />
        <TicketFooterRow />
        <TicketButtons />
    </Wrapper>
);

export default TicketSistema;