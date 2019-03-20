import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const FooterBottomInfoItem = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 8px;
    white-space: pre-wrap;
    line-height: 10px;
`
const Link = styled.a`
    color: white;

`

const FooterBottomInfo = () => (
    <Wrapper>
        <FooterBottomInfoItem style={{ textTransform: 'uppercase', paddingBottom: '5px', fontSize: '6px' }}>IL GIOCO é VIETATO AI MINORI E PUò CAUSARE DIPENDENZA PATOLOGICA</FooterBottomInfoItem>
        <FooterBottomInfoItem>Sisal © Sisal Entertainment S.p.A. partita IVA 02433760135 - Conc. GAD: 15155></FooterBottomInfoItem>
        <FooterBottomInfoItem>Questo sito e le piattaforme di gioco utilizzano <Link href='https://m.sisal.it/societa/cookies?backto=https://m.sisal.it/scommesse-matchpoint/&siteid=5'>cookies</Link></FooterBottomInfoItem>
    </Wrapper>
)

export default FooterBottomInfo;

