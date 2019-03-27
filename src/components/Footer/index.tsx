import * as React from 'react';

import FooterInfo from 'src/components/FooterInfo';
import FooterHelp from 'src/components/FooterHelp';
import FooterLogos from 'src/components/FooterLogos';
import FooterBottomInfo from 'src/components/FooterBottomInfo';
import VersioneDesktopBtn from 'src/components/VersioneDesktopBtn';
import { IFooterContent } from 'src/models/IFooterContent';

import Wrapper from './Wrapper';

interface Props {
    content: IFooterContent,
}
const Footer: React.FC<Props> = ({ content }) => {
    const { footerInfoLinks, footerHelpIcons, footerLogos, footerBottomInfo } = content;
    return (
        <Wrapper>
            <FooterInfo links={footerInfoLinks} />
            <FooterHelp icons={footerHelpIcons} />
            <FooterLogos logos={footerLogos} />
            <FooterBottomInfo info={footerBottomInfo} />
            <VersioneDesktopBtn />
        </Wrapper>
    )
};

export default Footer;

