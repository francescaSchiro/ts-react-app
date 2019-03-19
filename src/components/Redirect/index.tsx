import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const P = styled.p`
  display: flex;
  color: inherit;
  white-space:normal;
  text-align: center;
  margin: 0;
  font-size: 1em;
`;

const B = styled.p`
  white-space: normal;
  color: black;
  font-weight: 700;
  display: flex;
  text-align: center;
  margin: 0;
  font-size: 1em;
`;

const ArrowRight = styled.div`
  width: 6px;
  height: 6px;
  border-right: 2px solid #4a4a4a;
  border-bottom: 2px solid #4a4a4a;
  transform: rotate(-45deg);
  margin: 0 0 0 5px;
`;

const Redirect = () => (
  <Wrapper>
    <P>TUTTO</P>
    <B>&nbsp;CALCIO&nbsp;</B>
    <P>LIVE</P>
    <ArrowRight />
  </Wrapper>
);

export default Redirect;
