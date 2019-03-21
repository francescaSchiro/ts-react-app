import * as React from 'react';

import Wrapper from './Wrapper';

interface OwnProps {
    isLoginOpen: boolean,
};

const HeaderLoginBtn: React.FC<OwnProps> = ({ isLoginOpen }) => (
    <Wrapper isLoginOpen={isLoginOpen}>
        Accedi
    </Wrapper>
);

export default HeaderLoginBtn;
