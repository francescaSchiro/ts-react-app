import * as React from 'react';
import styled from 'src/theme/default/index';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketBodyItems from 'src/components/TicketBodyItems';
import AvvenimentoCancellato from 'src/components/AvvenimentoCancellato';
import TicketInfoAlert from 'src/components/TicketInfoAlert';

import Wrapper from './Wrapper';


interface Props {
    sistema: boolean,
    content: ITicketBodyContent;
};

const TicketBody: React.FC<Props> = ({ sistema, content }) => {
    const { pronosticoList } = content;
    return (
        <Wrapper>
            {sistema
                ? <TicketInfoAlert
                    message={'Per giocare un sistema inserisci almeno 2 esiti'}
                    infoIconUrl={'https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8'}
                />
                : null
            }
            <TicketSubhead> Cancella tutto </TicketSubhead>
            <TicketBodyItems sistema={sistema} pronosticoList={pronosticoList} />
            <AvvenimentoCancellato />
        </Wrapper>
    );
};

const TicketSubhead = styled.div`
    width: 100%;
    height: 30px;
    min-height: 25px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: #333;
`;

export default TicketBody;