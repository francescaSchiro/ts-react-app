import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import { FooterInfoLink } from 'src/components/Footer/footerInfoLinks';


const InfoWrapper = styled.a`
    all:unset;
    display:flex;
    justify-content:space-between;
    align-items: center;
`
const Title = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
    color: #666666;
    font-size: 16px;
    font-weight: bold;
`

const RightArrow = styled.div`
    width: 8px;
    height: 8px;
    margin-right:15px;
    border-right: 1px solid #4a4a4a;
    border-bottom: 1px solid #4a4a4a;
    transform: translate(-50%, 18%) rotate(-45deg);
`

const InfoLinksWrapper = styled.div`
    width: 100%;
    padding: 10px 15px;
    border-top: 1px solid #ececec;
`
const InfoLink = styled.a`
    display: inline-flex;
    width: calc(100% / 3);
    font-size: 14px;
    color: #666666;
    padding: 6px 0;
`
interface IFooterInfoProps {
    footerInfoLinks: FooterInfoLink[],
}

const FooterInfo = (props: IFooterInfoProps) => (
    <Wrapper>
        <InfoWrapper href='https://m.sisal.it/scommesse-matchpoint/info'>
            <Title>Info</Title>
            <RightArrow />
        </InfoWrapper>
        <InfoLinksWrapper>
            {props.footerInfoLinks.map(el =>
                <InfoLink key={el.label} href={el.url}>{el.label}</InfoLink>
            )}
        </InfoLinksWrapper>
    </Wrapper>

)

export default FooterInfo;

