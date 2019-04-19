import * as React from 'react';
import styled from 'src/theme/default/index';

import { IPronosticoItem } from 'src/models/IPronosticoItem';

import Wrapper from './Wrapper';


interface Props {
    content: IPronosticoItem[]
};

const TicketDettaglioSistemaTableEvent: React.FC<Props> = ({ content }) => (
    < Wrapper >
        <TR>
            <TD>N</TD>
            <TD>fissa</TD>
            <TD>evento</TD>
            <TD>esito scommesso</TD>
        </TR>
        <TR>
            <TD> 1  </TD>
            <TD rowspan={2} />
            <TD rowspan={2}>{content[0].descrizioneAvvenimento}</TD>
            <TD> {content[0].descrizioneScommessa}: {content[0].descrizioneEsito} </TD>
        </TR>
        <TR>
            <TD> 2  </TD>
            <TD> {content[1].descrizioneScommessa}: {content[1].descrizioneEsito} </TD>
        </TR>
        <TR>
            <TD> 3  </TD>
            <TD />
            <TD> {content[2].descrizioneAvvenimento} </TD>
            <TD>{content[2].descrizioneScommessa}: {content[2].descrizioneEsito}</TD>
        </TR>
        <TR>
            <TD>4  </TD>
            <TD />
            <TD>{content[3].descrizioneAvvenimento}</TD>
            <TD>{content[3].descrizioneScommessa}: {content[3].descrizioneEsito}</TD>
        </TR>
    </Wrapper >

);
interface ITDProps {
    rowspan?: number;
}
const TD = styled.td`
    border-left: 1px solid #eaeaea;
    padding: 0 8px;
    min-width: 16px;
    height: 35px;
    min-height: 35px;
    text-align: left;
    vertical-align: middle;
    ${(props: ITDProps) => `rowspan: ${props.rowspan};`}
    &:first-child {
        width: 20%;
    };
    &:nth-child(2) {
       width: 10%;
       /* text-align: center; */
    };
    &:nth-child(3) {
       width: 35%;
    };
    &:nth-child(4) {
       width: 45%;
       border-right: 1px solid #eaeaea;
    };
`;
const TR = styled.tr`
    height: 35px;
    min-height: 35px;
    color: #393939;
    border-bottom: 1px solid #eaeaea;
    font-family: 'Roboto', sans-serif;
    background-color: white;
    &:first-child {
        background: #eaeaea;
        font-weight: bold;
        font-size: 11px;
        text-transform: uppercase;
    };
`;

export default TicketDettaglioSistemaTableEvent;