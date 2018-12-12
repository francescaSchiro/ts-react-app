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


{/* <SportListSection>
<SportListIcon active={true} icon={sportListItems[0].icon} />
<SportListLabel active={true}> HOME </SportListLabel>
</SportListSection>
<SportListSection>
<SportListIcon active={false} icon={sportListItems[1].icon} />
<SportListLabel active={false}> LIVE </SportListLabel>
</SportListSection>
<SportListSection>
<SportListIcon active={false} icon={sportListItems[2].icon} />
<SportListLabel active={false}> SCOMMESSE </SportListLabel>
</SportListSection>
<SportListSection>
<SportListIcon active={false}>
  {' '}
  {sportListItems[3].iconText()}
</SportListIcon>
<SportListLabel active={false}> OGGI </SportListLabel>
</SportListSection>
<SportListSection>
<SportListIcon active={false}>
  {sportListItems[4].iconText()}
</SportListIcon>
<SportListLabel active={false}> DOMANI </SportListLabel>
</SportListSection>
<SportListSection>
<SportListIcon active={false}>
  {sportListItems[5].iconText()}
</SportListIcon>
<SportListLabel active={false}> DOPODOMANI </SportListLabel>
</SportListSection> */}