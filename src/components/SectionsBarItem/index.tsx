import * as React from 'react';
import styled from 'src/theme/default/index';


import Wrapper from './Wrapper';

interface ISectionsBarItemProps {
  key: number,
  active: boolean,
  icon?: string,
  label: string,
  iconText?: number | string
}

const SectionsBarItem = (props: ISectionsBarItemProps) => (
  <Wrapper key={props.key}>
    <SectionsBarItemIcon
      active={props.active}
      icon={props.icon}
    >
      {props.iconText}
    </SectionsBarItemIcon>
    <SectionsBarItemLabel active={props.active}> {props.label}
    </SectionsBarItemLabel>
  </Wrapper>
);

export default SectionsBarItem;

interface ISectionsBarItemIconProps {
  active: boolean;
  icon?: string;
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


