import * as React from 'react';
import styled from 'src/theme/default/index';


const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666666;
    font-size: 14px;
    font-weight: normal;
    background-color: #fafafa;
    padding: 12px 0;
`

const VersioneDesktopBtn = () => (
    <Button href='https://www.sisal.it/scommesse-matchpoint'>Versione Desktop</Button>
);

export default VersioneDesktopBtn;