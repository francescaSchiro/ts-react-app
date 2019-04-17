import * as React from 'react';
import styled from 'src/theme/default/index';

import TicketInfoAlert from 'src/components/TicketInfoAlert';
import TicketStake from 'src/components/TicketStake';

import Wrapper from './Wrapper';


interface Props {
    onImportClick: () => void,
};

const TicketStakeSingMult: React.FC<Props> = ({ onImportClick }) => (
    <>
        <TicketInfoAlert
            error={true}
            message={'La puntata minima è di € 2,00'}
            infoIconUrl={'https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8'}
        />
        <Wrapper>
            <Puntata>Puntata</Puntata>
            <TicketStake onImportClick={onImportClick} error={true} />
        </Wrapper>
    </>
);

const Puntata = styled.div`
    position: absolute;
    top:0;
    margin-top: 27px;
    margin-left: -110px;
    color: #bbb;
    font-style: normal;
    font-size: 11px;
`;

export default TicketStakeSingMult;
