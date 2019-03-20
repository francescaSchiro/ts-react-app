import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import { FooterLogo } from 'src/components/Footer/footerLogos';


const Logo = styled.a`
    all:unset;
    padding: 10px 5px;
`
const Img = styled.img`
height: 23px;
`

interface IFooterLogosProps {
    footerLogos: FooterLogo[],
}

const FooterLogos = (props: IFooterLogosProps) => (
    <Wrapper>
        {props.footerLogos.map((el, i) =>
            <Logo key={i} href={el.goToUrl} >
                <Img src={el.imgUrl} />
            </Logo>
        )}
    </Wrapper>
)

export default FooterLogos;

