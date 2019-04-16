import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


interface Props {
    onChiudiClick: () => void,
};

// TODO add media query for horizontal view conditionally rendered
const TicketDettaglioSistema: React.FC<Props> = ({ onChiudiClick }) => (
    <Wrapper>
        <Close onClick={onChiudiClick}> chiudi</Close>
        <Icon />
        <Label>Ruota il tuo dispositivo</Label>
        <Label>per visualizzare lo sviluppo del sistema</Label>
    </Wrapper>
);

const Close = styled.div`
    width: 100%;
    padding: 16px;
    text-align: right;
    color: white;
    font-size: 14px;
`;
const Icon = styled.div`
    width: 100%;
    max-width: 150px;
    height: 30%;
    background: url('https://m.sisal.it/scommesse-matchpoint/content/img/rotate.png?v=2.7.5.3') center center no-repeat;
    background-size: 70%;
    margin-top: 40%;
    padding-left: 12px;
`;
const Label = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 17px;
    padding-bottom: 7px;
    padding-left: 12px;
`;

export default TicketDettaglioSistema;