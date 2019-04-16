import * as React from 'react';

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
            <TicketStake onImportClick={onImportClick} error={true} />
        </Wrapper>
    </>
);

export default TicketStakeSingMult;
