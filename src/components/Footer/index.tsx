import * as React from 'react';

import Wrapper from './Wrapper';
import FooterInfo from 'src/components/FooterInfo';
import FooterHelp from 'src/components/FooterHelp';
import footerInfoLinks from './footerInfoLinks';
import footerHelpIcons from './footerHelpIcons';
class Footer extends React.Component {
    public render() {
        return (
            <Wrapper>
                <FooterInfo footerInfoLinks={footerInfoLinks} />
                <FooterHelp footerHelpIcons={footerHelpIcons} />
            </Wrapper >
        )
    }
}

export default Footer;

