import * as React from 'react';
import styled from 'src/theme/default/index';

import { IAppSeoContent } from 'src/models/IAppSeoContent';

import Wrapper from './Wrapper';


interface Props {
  content: IAppSeoContent,
};

const AppSeo: React.FC<Props> = ({ content }) => {
  const { title, description } = content;
  return (
    <Wrapper>
      <TitleWrapper>
        <Title> {title}</Title>
      </TitleWrapper>
      <Description>
        {description}
      </Description>
    </Wrapper>
  )
};

const TitleWrapper = styled.div`
  width: auto;
  min-height: 20px; 
  padding: 0 0 12px 0;
  text-align: center;
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  white-space:normal;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  white-space: normal;
  text-align: left;
  font-size: 11px;
  line-height: 1.3;
`;

export default AppSeo;