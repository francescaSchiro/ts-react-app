import * as React from 'react';
import styled from 'src/theme/default/index';

import SectionsBarItem from 'src/components/SectionsBarItem';
import SearchBtn from 'src/components/SearchBtn';
import { ISectionsBarItem } from 'src/models/ISectionBarItem';

import Wrapper from './Wrapper';

interface OwnProps {
  items: ISectionsBarItem[]
}

const SectionsBar: React.FC<OwnProps> = ({ items }) => (
  <Wrapper>
    <SectionsBarSlider>
      {items.map((item: ISectionsBarItem) => (
        <SectionsBarItem
          item={item}
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
