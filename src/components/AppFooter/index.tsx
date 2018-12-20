import * as React from 'react';

import AppFooterWrapper from './Wrapper';
import FooterLogo from './FooterLogo';
import FooterLabel from './FooterLabel';
import FooterInfo from './FooterInfo';


const AppFooter = () => (
  <AppFooterWrapper>
    <FooterLogo/>
    <FooterLabel>IL GIOCO é VIETATO AI MINORI E PUò CAUSARE DIPENDENZA PATOLOGICA</FooterLabel>
    <FooterInfo/>
  </AppFooterWrapper>
);

export default AppFooter;
