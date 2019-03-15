import * as React from 'react';

import Wrapper from './Wrapper';
import SectionsBarSlider from './SectionsBarSlider';
import SectionsBarItem from './SectionsBarItem';
import SectionsBarSectionIcon from './SectionsBarSectionIcon';
import SportListLabel from './SportListLabel';
import SportListSearch from './SportListSearch';

import sectionsBarItems from './sectionsBarItems';

const SectionsBar = () => (
  <Wrapper>
    <SectionsBarSlider>
      {sectionsBarItems.map(el => (
        <SectionsBarItem key={el.key}>
          <SectionsBarSectionIcon
            active={el.active}
            icon={el.icon}
          >
            {el.iconText()}
          </SectionsBarSectionIcon>
          <SportListLabel active={el.active}> {el.label}
          </SportListLabel>
        </SectionsBarItem>
      ))}
    </SectionsBarSlider>
    <SportListSearch />
  </Wrapper>
);

export default SectionsBar;


