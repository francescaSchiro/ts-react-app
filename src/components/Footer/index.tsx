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
const HelpWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #186CB5;
  color: #ffffff;
  padding: 12px 12px 10px 12px;
`
const HelpTitle = styled.div`
    font-size:16px;
    font-weight: normal;
    padding-bottom: 12px;
`
const IconsWrapper = styled.div`
    display:flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const IconLabelWrapper = styled.a`
    all: unset;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
interface IIconProps {
    iconId: string,
}
const Icon = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    border: 1px solid white;
    border-radius: 50%;
    
    &:after {
        content: '${(props: IIconProps) => props.iconId}';
        position: absolute;
        top: 29%;
        right: 35%;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }
`
const Label = styled.div`
    font-size: 14px;
    font-weight: normal;
    margin-top: 8px;
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

                <HelpWrapper>
                    <HelpTitle>Cerchi Aiuto?</HelpTitle>
                    <IconsWrapper>
                        <IconLabelWrapper href='https://m.sisal.it/sisal-chat/chat/ChatUser.htm?ref=m&nic=&area=Cerchi%20Aiuto&mF=true'>
                            <Icon iconId='C' />
                            <Label>Chat</Label>
                        </IconLabelWrapper>
                        <IconLabelWrapper href='tel:800999445'>
                            <Icon iconId='N' />
                            <Label>800.999.445</Label>
                        </IconLabelWrapper>
                        <IconLabelWrapper href='https://m.sisal.it/contatti'>
                            <Icon iconId='C' />
                            <Label>Contatti</Label>
                        </IconLabelWrapper>
                        <IconLabelWrapper href='https://m.sisal.it/scommesse-matchpoint/faq'>
                            <Icon iconId='F' />
                            <Label>FAQ</Label>
                        </IconLabelWrapper>
                    </IconsWrapper>
                </HelpWrapper>

            </Wrapper >
        )
    }
}

export default Footer;

