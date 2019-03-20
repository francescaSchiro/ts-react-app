import * as React from 'react';

import Wrapper from './Wrapper';
import FooterInfo from 'src/components/FooterInfo';
import FooterHelp from 'src/components/FooterHelp';
import FooterLogos from 'src/components/FooterLogos';
import FooterBottomInfo from 'src/components/FooterBottomInfo';
import footerInfoLinks from './footerInfoLinks';
import footerHelpIcons from './footerHelpIcons';
import footerLogos from './footerLogos';

class Footer extends React.Component {
    public render() {
        return (
            <Wrapper>
                <FooterInfo footerInfoLinks={footerInfoLinks} />
                <FooterHelp footerHelpIcons={footerHelpIcons} />
                <FooterLogos footerLogos={footerLogos} />
                <FooterBottomInfo />
            </Wrapper >
        )
    }
}

export default Footer;

