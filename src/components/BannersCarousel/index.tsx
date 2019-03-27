import * as React from 'react';
import styled from 'src/theme/default/index';

import { IBanner } from 'src/models/IBanner';

import Wrapper from './Wrapper';


interface Props {
  banners: IBanner[]
}

const BannersCarousel: React.FC<Props> = ({ banners }) => (
  <Wrapper>
    {banners.map((el: IBanner) => (
      <BannerWrapper key={el.title}>
        <CategoryWrapper>
          <CategoryTitle>{el.category}</CategoryTitle>
        </CategoryWrapper>
        <CardWrapper>
          <CoverImage imgUrl={el.imgUrl} />
          <TitleWrapper>
            <Title>{el.title}</Title>
          </TitleWrapper>

          <Description>{el.description}</Description>


          <BannerButtonContainer>
            <BannerButton>
              <BtnText>{el.btnText}</BtnText>
            </BannerButton>
          </BannerButtonContainer>
        </CardWrapper>
      </BannerWrapper>
    ))}
  </Wrapper>
);

const BannerWrapper = styled.li`
  display: inline-flex;
  flex-direction:column;
  justify-content: flex-start;
  background-color: white;
  height: 320px;
  width: 70%;
  border-width: 12px 0 12px 12px;
  border-style: solid;
  border-color: #eaeaea;
  scroll-snap-align: start;
  text-align: center;
  &:last-child {
    margin-right: 30%;
  }
`;

const CategoryWrapper = styled.div`
  width: auto;
  min-height: 20px; 
  padding: 8px 0px 12px 0px; /*0 10px 10px 10px*/
  text-align: center;
  background-color: #eaeaea;
`;

const CategoryTitle = styled.p`
  font-size: 14px;
  color: #393939;
  font-weight: 700;
  text-transform: uppercase;
  white-space:normal;
`;
const CardWrapper = styled.div`
  flex-direction: column;
  height:100%;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;
interface ICoverImageProps {
  imgUrl: string,
}
const CoverImage = styled.div`
  background-image: ${(props: ICoverImageProps) => `url(${props.imgUrl})`};
  height: 40%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
const TitleWrapper = styled.div`
  width: auto;
  min-height: 20px; 
  padding: 10px 10px 2px 10px;
  text-align: center;
  font-weight: bold;
`;
const Title = styled.p`
  font-size: 14px;
  text-align:left; 
  white-space:normal;
`;
const Description = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: center;
  white-space: normal;
  text-align: left;
  padding: 0 10px;
  font-size: 1.2em;

`;

const BannerButtonContainer = styled.div`
  display: flex;
  padding: 10px;
`;
const BannerButton = styled.button`
  padding: 10px;
  width:calc(100% - 20px);
  font-size: 13px;
  color: #393939;
  font-weight: 700;
  border: 1px solid #585858;
  border-radius: 2px;
  background-color:white;
  position: absolute;
  bottom: 10px;
`;
const BtnText = styled.p`
  color: #393939;
  font-weight: 700;
  white-space:normal;
  text-transform: uppercase;
`;

export default BannersCarousel;