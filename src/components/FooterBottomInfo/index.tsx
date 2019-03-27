import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import { IFooterBottomInfo } from 'src/models/IFooterBottomInfo';


interface Props {
    info: IFooterBottomInfo,
}

const FooterBottomInfo: React.FC<Props> = ({ info }) => {
    const { title, copyright, cookiesText, cookiesLink } = info;
    return (
        <Wrapper>
            <FooterBottomInfoItem style={{ textTransform: 'uppercase', paddingBottom: '5px', fontSize: '6px' }}>{title}</FooterBottomInfoItem>
            <FooterBottomInfoItem>{copyright}</FooterBottomInfoItem>
            <FooterBottomInfoItem>{cookiesText}<Link href={cookiesLink}>cookies</Link></FooterBottomInfoItem>
        </Wrapper>
    );
};

const FooterBottomInfoItem = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 8px;
    white-space: pre-wrap;
    line-height: 10px;
`
const Link = styled.a`
    color: white;
`

export default FooterBottomInfo;

