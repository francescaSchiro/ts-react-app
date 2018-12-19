import styled from '../../theme/default/index';

interface MyProps {
  imgUrl: string;
}

const CoverImage = styled.div`
  background-image: ${(props: MyProps) => `url(${props.imgUrl})`};
  height: 35%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default CoverImage;
