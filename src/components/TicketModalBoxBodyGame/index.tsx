import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


interface Props {
    descrizioneScommessa: string,
    descrizioneEsito: string,
    quota: number,
};

const TicketModalBoxBodyGame: React.FC<Props> = ({ descrizioneScommessa, descrizioneEsito, quota }) => (
    <Wrapper>
        <DeleteIcon show={true} />
        <GameLabel>{descrizioneScommessa}:</GameLabel>
        <GameLabelDark>{descrizioneEsito} ({quota / 100})</GameLabelDark>
    </Wrapper>
);

interface IDeleteIconProps {
    show?: boolean;
};

const DeleteIcon = styled.div`
    display: ${(props: IDeleteIconProps) => props.show ? 'block' : 'none'};
    width:12px;
    height:14px;
    margin-right: 8px;
    background-size: 12px;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_delete.png?v=2.6.8');
    background-repeat: no-repeat;
    background-position: center;
`;
const GameLabel = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    color: #909090;
`;
const GameLabelDark = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #222;
    margin-left: 5px;
`;

export default TicketModalBoxBodyGame;

