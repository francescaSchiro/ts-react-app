import * as React from 'react';
import styled from 'src/theme/default/index';

import { ISectionsBarItem } from 'src/models/ISectionBarItem';

import Wrapper from './Wrapper';


interface OwnProps {
  item: ISectionsBarItem,
}

const SectionsBarItem: React.FC<OwnProps> = ({ item }) => {
  const { active, icon, iconText, label } = item;
  return (
    <Wrapper key={label}>
      <SectionsBarItemIcon
        active={active}
        icon={icon}
      >
        {iconText}
      </SectionsBarItemIcon>
      <SectionsBarItemLabel active={active}> {label}
      </SectionsBarItemLabel>
    </Wrapper>
  )
};
interface ISectionsBarItemIconProps {
  active: boolean;
  icon?: string | null;
}

const SectionsBarItemIcon = styled.div`
  background-image: ${(props: ISectionsBarItemIconProps) =>
    props.icon ? `url(${props.icon})` : undefined};
  width: 24px;
  height: 24px;
  display: block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${(props: ISectionsBarItemIconProps) => (props.active ? '1' : '0.5')};
  filter: grayscale(${(props: ISectionsBarItemIconProps) => (props.active ? '0' : '100%')});
  font-size: 25px;
  font-weight: 700;
  width: 1.5em;
  text-align: center;
  line-height: 1em;
`;

interface ISectionsBarItemLabelProps {
  active: boolean;
}

const SectionsBarItemLabel = styled('div') <ISectionsBarItemLabelProps>`
  color: ${props => (props.active ? '#b9d531' : '#909090')};
  font-weight: 700;
  margin-top: 3px;
  position: relative;
  ${props =>
    props.active
      ? `&::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            left: 50%;
            bottom: -6px;
            background: #b9d531;
            -moz-transform: translate(-50%, 0);
            -ms-transform: translate(-50%, 0);
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
          }`
      : `&::after {
            content: '' }; `};
`;

export default SectionsBarItem;
