import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import TopBannerInfo from 'src/components/TopBannerInfo';


const InfoIcon = styled.div`
  height: 50px;
  width: 40px;
  background-size: 24px;
  background-image: url('https://mtest-liferay.sisal.it/scommesse/content/img/ic_info.png?v=2.7.5.1');
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
`;

const content = {
  imgUrl: 'https://www.clondalkinleisure.com/wp-content/uploads/2016/03/img-allweather-banner02.jpg',
  url: 'https://mtest-liferay.sisal.it/scom-matchpoint/promozioni-e-novita',
  description: 'Questa funzionalità ti permette di concludere la scommessa live in modo veloce anche se le quote si aggiornano in modo non rilevante.',
};

interface ITopBannerState {
  isInfoOpen: boolean,
}

class TopBanner extends React.Component<{}, ITopBannerState> {
  public state = { isInfoOpen: false, content };
  public render() {
    const { isInfoOpen } = this.state;
    const { imgUrl, url, description } = content;
    return (
      <Wrapper imgUrl={imgUrl} onClick={this.goToUrl.bind(this, url)}>
        <InfoIcon onClick={this.toggleInfoBanner} />
        {isInfoOpen
          ? <TopBannerInfo onCloseClick={this.toggleInfoBanner} description={description} />
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

export default TopBanner;
