import * as React from 'react';

import RedirectWrapper from './Wrapper';
import P from '../P';
import B from '../B';
import ArrowRight from '../ArrowRight';

const Redirect = () => (
  <RedirectWrapper>
    <P>TUTTO</P>
    <B>&nbsp;CALCIO&nbsp;</B>
    <P>LIVE</P>
    <ArrowRight width={'6px'} height={'6px'} margin={'0 0 0 5px'} />
  </RedirectWrapper>
);

export default Redirect;
