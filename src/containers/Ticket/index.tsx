import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import Multipla from './Multipla';
import ModalBox from './ModalBox';

const Ticket = () => (
    <Wrapper>
        <BetslipHead />
        <ModalBox />
        <Multipla />
    </Wrapper>
);

export default Ticket;