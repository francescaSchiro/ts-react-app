import * as React from 'react';

import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


interface Props {
  onCloseClick: () => void,
  description: string,
}

const TopBannerInfo: React.FC<Props> = ({ onCloseClick, description }) => (
  <Wrapper >
    <Description>{description}</Description>
    <CloseIcon onClick={onCloseClick} />
  </Wrapper>
);

const CloseIcon = styled.div`
    height: 50px;
    width: 40px;
    background-size: 16px;
    background-image: url('https://mtest-liferay.sisal.it/scommesse/content/img/chiudi_white.png?v=2.7.5.1');
    background-repeat: no-repeat;
    background-position: top;
`

const Description = styled.div`
  display: flex;
  height: 100%;
  flex-grow: 1;
  padding-right: 16px;
  justify-content: flex-start;
  align-items: flex-start;
`

export default TopBannerInfo;
