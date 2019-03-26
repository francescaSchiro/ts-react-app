import * as React from 'react';
import styled from 'src/theme/default/index';

import { ISport } from 'src/models/ISport';
import { IMainEventsTab } from 'src/models/IMainEventsTab';

import Wrapper from './Wrapper';


interface Props {
  currentSport: ISport,
  currentTab: IMainEventsTab,
}

const Redirect: React.FC<Props> = ({ currentSport, currentTab }) => (
  <Wrapper>
    <P>TUTTO</P>
    <B>&nbsp;{currentSport.name}&nbsp;</B>
    {currentTab.name === 'live'
      ? < P > LIVE</P>
      : null
    }
    <ArrowRight />
  </Wrapper>
);

const P = styled.p`
  display: flex;
  color: inherit;
  white-space: normal;
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
  text-transform: uppercase;
`;

const ArrowRight = styled.div`
  width: 6px;
  height: 6px;
  border-right: 2px solid #4a4a4a;
  border-bottom: 2px solid #4a4a4a;
  transform: rotate(-45deg);
  margin: 0 0 0 5px;
`;

export default Redirect;
