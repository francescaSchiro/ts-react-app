import * as React from 'react';
import styled from 'src/theme/default/index';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketBodyItems from 'src/components/TicketBodyItems';
import AvvenimentoCancellato from 'src/components/AvvenimentoCancellato';

import Wrapper from './Wrapper';


interface Props {
    content: ITicketBodyContent;
};

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

interface IInfoAlertProps {
    error?: boolean;
}

const InfoAlert = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    background-color: ${(props: IInfoAlertProps) => props.error ? '#D82600' : '#f7a81e'};
    color: #fff;
    padding: 6px 12px;
    font-size: 11px;
`;

const InfoIcon = styled.div`
    height: 15px;
    width:15px;
    opacity: .7;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8');
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 6px 0 0;

`;

export default TicketBody;