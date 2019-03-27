import { IFooterInfoLink } from 'src/models/IFooterInfoLink';
import { IFooterHelpIcon } from 'src/models/IFooterHelpIcon';
import { IFooterLogo } from 'src/models/IFooterLogo';
import { IFooterBottomInfo } from 'src/models/IFooterBottomInfo';

export interface IFooterContent {
    footerInfoLinks: IFooterInfoLink[],
    footerHelpIcons: IFooterHelpIcon[],
    footerLogos: IFooterLogo[],
    footerBottomInfo: IFooterBottomInfo,
};




