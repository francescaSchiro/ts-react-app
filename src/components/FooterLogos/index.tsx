import * as React from 'react';
import styled from 'src/theme/default/index';

import { IFooterLogo } from 'src/models/IFooterLogo';

import Wrapper from './Wrapper';


interface Props {
    logos: IFooterLogo[],
};

const FooterLogos: React.FC<Props> = ({ logos }) => (
    <Wrapper>
        {logos.map((logo: IFooterLogo, i) => {
            const { goToUrl, imgUrl } = logo;
            return (
                <Logo key={i} href={goToUrl} >
                    <Img src={imgUrl} />
                </Logo>
            );
        }
        )}
    </Wrapper>
);

const Logo = styled.a`
    all:unset;
    padding: 10px 5px;
`
const Img = styled.img`
height: 23px;
`

export default FooterLogos;

