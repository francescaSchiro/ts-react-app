import * as React from 'react';

import Wrapper from './Wrapper';

interface IHeaderBalance {
    balance: number | string,
    onClick: () => void,
}

const HeaderBalance = (props: IHeaderBalance) => (
    <Wrapper onClick={props.onClick}>
        <div>Saldo</div>
        <div style={{ fontSize: '11px', whiteSpace: 'nowrap', marginTop: '2px' }}>€ {props.balance}</div>
    </Wrapper>
);

export default HeaderBalance;