import * as React from 'react';
import FooterInfoWrapper from './FooterInfoWrapper';
import FooterInfoItem from './FooterInfoItem';
import FooterInfoButton from './FooterInfoButton';
import FooterInfoCookies from './FooterInfoCookies';

const FooterInfo = () => (
  <FooterInfoWrapper>
    <FooterInfoItem>Sisal © Sisal Entertainment S.p.A. partita IVA 02433760135 - Conc. GAD: 15155</FooterInfoItem>
    <FooterInfoButton>SITO PER PC</FooterInfoButton>
    <FooterInfoCookies href='https://m.sisal.it/societa/cookies?backto=https://m.sisal.it/scommesse-matchpoint/&siteid=5'>Questo sito e le piattaforme di gioco utilizzano cookies</FooterInfoCookies>
  </FooterInfoWrapper>
  );

export default FooterInfo;
