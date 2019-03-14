import * as React from 'react';
import styled from 'src/theme/default/index';


import Wrapper from './Wrapper';
import TopBannerInfo from 'src/components/TopBannerInfo';


interface ITopBannerState {
  isInfoOpen: boolean,
  description?: string,
}

class TopBanner extends React.Component<{}, ITopBannerState> {
  public state = { isInfoOpen: false, description: 'Questa funzionalità ti permette di concludere la scommessa live in modo veloce anche se le quote si aggiornano in modo non rilevante.' };
  public render() {
    const { isInfoOpen, description } = this.state;

    return (
      <Wrapper>
        <InfoIcon onClick={this.toggleInfoBanner} />
        {isInfoOpen
          ? <TopBannerInfo onCloseClick={this.toggleInfoBanner} description={description} />
          : null
        }
      </Wrapper>
    );
  }

  private toggleInfoBanner = () => {
    this.setState({ isInfoOpen: !this.state.isInfoOpen });
  };
}

export default TopBanner;

const InfoIcon = styled.div`
    height: 50px;
    width: 40px;
    background-size: 24px;
    background-image: url('https://mtest-liferay.sisal.it/scommesse/content/img/ic_info.png?v=2.7.5.1');
    background-position: center;
    background-repeat: no-repeat;
    background-position: center;
    
`