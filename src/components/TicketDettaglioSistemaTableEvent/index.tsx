import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const TicketDettaglioSistemaTableEvent: React.FC = () => (
    <Wrapper>
        <TR>
            <TD>N</TD>
            <TD>fissa</TD>
            <TD>evento</TD>
            <TD>esito scommesso</TD>
        </TR>
        <TR>
            <TD> 1  </TD>
            <TD rowspan={2} />
            <TD rowspan={2}>Chelsea - Slavia Praga</TD>
            <TD> ESITO FINALE 1X2: 1 </TD>
        </TR>
        <TR>
            <TD> 2  </TD>
            <TD> ESITO FINALE 1X2: 2 </TD>
        </TR>
        <TR>
            <TD> 3  </TD>
            <TD />
            <TD> Jung, Jason - Oliveira, Goncalo </TD>
            <TD>TESTA A TESTA MATCH RISULTATO: 1</TD>
        </TR>
        <TR>
            <TD>4  </TD>
            <TD />
            <TD> Detkovskaya D / Kulambayeva Z - Dema V / Dmitrichenko Y </TD>
            <TD>TESTA A TESTA MATCH RISULTATO: 2</TD>
        </TR>
    </Wrapper>
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