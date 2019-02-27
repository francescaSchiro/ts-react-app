import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import Buttons from './Buttons';
import BetslipBody, { IBetslipBody } from './BetslipBody';
import SettingsDefaultBlock from './SettingsDefaultBlock';
import BetslipDevelop from './BetslipDevelop';
import InfoAlert from './InfoAlert';
import InfoIcon from './InfoIcon';


const Sistema: React.FC<IBetslipBody> = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody sistema={true} />
        <SettingsDefaultBlock />
        <BetslipDevelop />
        <InfoAlert error={true}>
            <InfoIcon />
            Importo minimo non rispettato per la giocata sistemistica.
        </InfoAlert>


        <Buttons />
    </Wrapper>
);

export default Sistema;