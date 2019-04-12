import * as React from 'react';

import TicketModalBoxBodyGame from 'src/components/TicketModalBoxBodyGame';

import Wrapper from './Wrapper';


interface Props {
    descrizioneScommessa: string,
    descrizioneEsito: string,
    quota: number,
};

const TicketModalBoxBody: React.FC<Props> = ({ descrizioneScommessa, descrizioneEsito, quota }) => (
    <Wrapper>
        <TicketModalBoxBodyGame
            descrizioneScommessa={descrizioneScommessa}
            descrizioneEsito={descrizioneEsito}
            quota={quota}
        />
    </Wrapper>
);

export default TicketModalBoxBody;