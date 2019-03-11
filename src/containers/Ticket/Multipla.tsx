import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipBody from './BetslipBody';
import BetslipHead from './BetslipHead';
import SettingsDefaultBlock from './SettingsDefaultBlock';
import BetslipFooter from './BetslipFooter';
import Buttons from './Buttons';
import InfoAlert from './InfoAlert';
import InfoIcon from './InfoIcon';

const Multipla = () => (
    <Wrapper>
        <BetslipHead />
        <BetslipBody />
        <InfoAlert error={true}>
            <InfoIcon />
            La puntata minima è di € 2,00
        </InfoAlert>
        <SettingsDefaultBlock />
        <BetslipFooter />
        <Buttons />
    </Wrapper>
);

export default Multipla;