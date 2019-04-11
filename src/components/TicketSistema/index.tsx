import * as React from 'react';
import styled from 'src/theme/default/index';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketButtons from 'src/components/TicketButtons';
import TicketBody from 'src/components/TicketBody';
import TicketSettingsDefaultBlock from 'src/components/TicketSettings';
import TicketDevelop from 'src/components/TicketDevelop';
import TicketFooterRow from 'src/components/TicketFooterRow';

import Wrapper from './Wrapper';

interface Props {
    content: ITicketBodyContent,
    sistema: boolean,
};

const TicketSistema: React.FC<Props> = ({ content, sistema }) => (
    <Wrapper>
        <TicketBody content={content} sistema={sistema} />
        <TicketSettingsDefaultBlock />
        <TicketDevelop />
        <InfoAlert error={true}>
            <InfoIcon />
            Importo minimo non rispettato per la giocata sistemistica.
        </InfoAlert>
        <TicketFooterRow />
        <TicketButtons />
    </Wrapper>
);

interface IInfoAlertProps {
    error?: boolean;
};

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



export default TicketSistema;