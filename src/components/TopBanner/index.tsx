import * as React from 'react';
import styled from 'src/theme/default/index';

import TopBannerInfo from 'src/components/TopBannerInfo';
import { IBanner } from 'src/models/IBanner';

import Wrapper from './Wrapper';


interface State {
  isInfoOpen: boolean,
}
interface Props {
  banner: IBanner,
}

class TopBanner extends React.Component<Props, State> {
  public state: State = {
    isInfoOpen: false
  };
  public render() {
    const { isInfoOpen } = this.state;
    const { imgUrl, url, description, infoIcon } = this.props.banner;
    return (
      <Wrapper
        imgUrl={imgUrl}
        onClick={this.goToUrl.bind(this, url)}
      >
        <InfoIcon onClick={this.toggleInfoBanner} infoIcon={infoIcon} />
        {isInfoOpen
          ? <TopBannerInfo
            onCloseClick={this.toggleInfoBanner}
            description={description}
          />
          : null
        }
      </Wrapper>
    );
  }
  private goToUrl = (url: string) => {
    window.location.href = url;
  }
  private toggleInfoBanner = (e?: any) => {
    e.stopPropagation();
    this.setState({ isInfoOpen: !this.state.isInfoOpen });
  };
}

interface IInfoIconProps {
  infoIcon: string,
  onClick: () => void,
}

const InfoIcon = styled.div`
  height: 50px;
  width: 40px;
  background-size: 24px;
  background-image: url(${(props: IInfoIconProps) => props.infoIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export default TopBanner;
