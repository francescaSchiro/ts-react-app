import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import FooterInfo from 'src/components/FooterInfo';
import footerInfoLinks from './footerInfoLinks';


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

                <FooterInfo footerInfoLinks={footerInfoLinks} />
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

