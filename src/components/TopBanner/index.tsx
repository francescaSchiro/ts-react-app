import * as React from 'react';
import styled from 'src/theme/default/index';

import TopBannerInfo from 'src/components/TopBannerInfo';
import { ITopBanner } from 'src/models/ITopBanner';

import Wrapper from './Wrapper';


interface State {
  isInfoOpen: boolean,
}
interface Props {
  content: ITopBanner,
}

class TopBanner extends React.Component<Props, State> {
  public state: State = {
    isInfoOpen: false
  };
  public render() {
    const { isInfoOpen } = this.state;
    const { imgUrl, url, description } = this.props.content;
    return (
      <Wrapper
        imgUrl={imgUrl}
        onClick={this.goToUrl.bind(this, url)}
      >
        <InfoIcon onClick={this.toggleInfoBanner} />
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

const InfoIcon = styled.div`
  height: 50px;
  width: 40px;
  background-size: 24px;
  background-image: url('https://mtest-liferay.sisal.it/scommesse/content/img/ic_info.png?v=2.7.5.1');
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export default TopBanner;
