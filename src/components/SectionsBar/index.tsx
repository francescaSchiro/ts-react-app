import * as React from 'react';
import styled from 'src/theme/default/index';


import Wrapper from './Wrapper';
import SectionsBarItem from 'src/components/SectionsBarItem';
import SearchBtn from 'src/components/SearchBtn';

import sectionsBarItems from './sectionsBarItems';

const SectionsBar = () => (
  <Wrapper>
    <SectionsBarSlider>
      {sectionsBarItems.map(el => (
        <SectionsBarItem key={el.key} active={el.active} icon={el.icon} label={el.label} iconText={el.iconText()} />
      ))}
    </SectionsBarSlider>
    <SearchBtn />
  </Wrapper>
);

export default SectionsBar;

const SectionsBarSlider = styled.div`
  display: flex;
  width: calc(100% - 45px);
  height: 100%;
  background-color: #222;
  color: white;
  overflow-x: auto;
  ::-webkit-scrollbar { 
    display: none; 
}
`;


