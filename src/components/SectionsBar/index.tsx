import * as React from 'react';

import Wrapper from './Wrapper';
import SportListSections from './SportListSections';
import SportListSection from './SportListSection';
import SectionsBarIcon from './SectionsBarIcon';
import SportListLabel from './SportListLabel';
import SportListSearch from './SportListSearch';

import sectionsBarItems from './sectionsBarItems';

interface ISectionsBarState {
  areIconsVisible: boolean,
}

class SectionsBar extends React.Component<{}, ISectionsBarState> {
  public state = { areIconsVisible: true }
  public render() {
    const { areIconsVisible } = this.state;
    return (
      <Wrapper>
        <SportListSections>
          {sectionsBarItems.map(el => (
            <SportListSection key={el.key}>
              {areIconsVisible
                ?
                <SectionsBarIcon
                  active={el.active}
                  icon={el.icon}
                >
                  {el.iconText()}
                </SectionsBarIcon>
                : null
              }
              <SportListLabel active={el.active}> {el.label}
              </SportListLabel>
            </SportListSection>
          ))}
        </SportListSections>
        <SportListSearch />
      </Wrapper>
    )
  }
}

export default SectionsBar;


