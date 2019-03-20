import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const InfoWrapper = styled.a`
    all:unset;
    display:flex;
    justify-content:space-between;
    align-items: center;
`
const FooterInfo = styled.div`
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

class Footer extends React.Component {
    public render() {
        return (
            <Wrapper>
                <InfoWrapper href='https://m.sisal.it/scommesse-matchpoint/info'>
                    <FooterInfo>Info</FooterInfo>
                    <RightArrow />
                </InfoWrapper>
                <InfoLinksWrapper>
                    <InfoLink href='https://m.sisal.it/scommesse-matchpoint/scommesse-on-demand'>Scommesse on Demand</InfoLink>
                    <InfoLink href='https://m.sisal.it/scommesse-matchpoint/promozioni'>Promozioni</InfoLink>
                    <InfoLink href='https://m.sisal.it/scommesse-live'>Scommesse Live</InfoLink>
                    <InfoLink href='https://m.sisal.it/scommesse-matchpoint/foglio-quote'>Foglio quote</InfoLink>
                    <InfoLink href='https://m.sisal.it/scommesse'>Scommesse</InfoLink>
                    <InfoLink href='https://m.sisal.it/scommesse-matchpoint/scommesse-matchpoint'>Palinsesto Scommesse</InfoLink>
                </InfoLinksWrapper>

            </Wrapper >
        )
    }
}

export default Footer;

