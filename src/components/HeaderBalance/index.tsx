import * as React from 'react';

import Wrapper from './Wrapper';

interface OwnProps {
    balance: number | string,
}

const HeaderBalance: React.FC<OwnProps> = ({ balance }) => (
    <Wrapper>
        <div>Saldo</div>
        <div style={{ fontSize: '11px', whiteSpace: 'nowrap', marginTop: '2px' }}>€ {balance}</div>
    </Wrapper>
);

export default HeaderBalance;