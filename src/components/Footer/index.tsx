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
class Footer extends React.Component {
    public render() {
        return (
            <Wrapper>
                <InfoWrapper href='https://m.sisal.it/scommesse-matchpoint/info'>
                    <FooterInfo>Info</FooterInfo>
                    <RightArrow />
                </InfoWrapper>

            </Wrapper >
        )
    }
}

export default Footer;

