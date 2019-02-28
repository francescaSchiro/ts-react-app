import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import Buttons from './Buttons';
import BetslipBody from './BetslipBody';
import SettingsDefaultBlock from './SettingsDefaultBlock';
import BetslipDevelop from './BetslipDevelop';
import InfoAlert from './InfoAlert';
import InfoIcon from './InfoIcon';
import BetslipFooterRow from './BetslipFooterRow';


const Sistema = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody sistema={true} />
        <SettingsDefaultBlock />
        <BetslipDevelop />
        <InfoAlert error={true}>
            <InfoIcon />
            Importo minimo non rispettato per la giocata sistemistica.
        </InfoAlert>
        <BetslipFooterRow />
        <Buttons />
    </Wrapper>
);

export default Sistema;