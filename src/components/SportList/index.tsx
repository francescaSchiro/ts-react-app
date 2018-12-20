import * as React from 'react';

import SportListWrapper from './Wrapper';
import SportListSections from './SportListSections';
import SportListSection from './SportListSection';
import SportListIcon from './SportListIcon';
import SportListLabel from './SportListLabel';
import SportListSearch from './SportListSearch';

import sportListItems from './sportlistItems';

const SportList = () => (
  <SportListWrapper>
    <SportListSections>
      {sportListItems.map(el => (
        <SportListSection key={el.key}>
          <SportListIcon
            active={el.active}
            icon={el.icon}
          >
            {el.iconText()}
          </SportListIcon>
          <SportListLabel active={el.active}> {el.label}
          </SportListLabel>
        </SportListSection>
      ))}
    </SportListSections>
    <SportListSearch />
  </SportListWrapper>
);

export default SportList;


