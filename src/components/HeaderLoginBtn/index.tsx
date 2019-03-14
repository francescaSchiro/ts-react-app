import * as React from 'react';

import Wrapper from './Wrapper';

interface IHeaderLoginBtn {
    showModal: boolean,
    onClick: () => void,
};

const HeaderLoginBtn = (props: IHeaderLoginBtn) => (
    <Wrapper onClick={props.onClick} showModal={props.showModal}>
        Accedi
    </Wrapper>
);

export default HeaderLoginBtn;
