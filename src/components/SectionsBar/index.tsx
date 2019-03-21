import * as React from 'react';
import styled from 'src/theme/default/index';

import SectionsBarItem from 'src/components/SectionsBarItem';
import SearchBtn from 'src/components/SearchBtn';
import { ISectionsBarItem } from 'src/components/HomePage/sectionsBarItems';

import Wrapper from './Wrapper';

interface ISectionsBarProps {
  sectionsBarItems: ISectionsBarItem[]
}

const SectionsBar = (props: ISectionsBarProps) => (
  <Wrapper>
    <SectionsBarSlider>
      {props.sectionsBarItems.map((item: ISectionsBarItem) => (
        <SectionsBarItem
          key={item.key}
          active={item.active}
          icon={item.icon}
          label={item.label}
          iconText={item.iconText()}
        />
      ))}
    </SectionsBarSlider>
    <SearchBtn />
  </Wrapper>
);

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

export default SectionsBar;
