import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import { FooterHelpIcon } from 'src/components/Footer/footerHelpIcons';


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
interface IFooterHelpProps {
    footerHelpIcons: FooterHelpIcon[],
}

const FooterHelp = (props: IFooterHelpProps) => (
    <Wrapper>
        <HelpTitle>Cerchi Aiuto?</HelpTitle>
        <IconsWrapper>
            {props.footerHelpIcons.map(el => (
                <IconLabelWrapper href={el.url}>
                    <Icon iconId={el.iconId} />
                    <Label>{el.label}</Label>
                </IconLabelWrapper>
            )
            )}
        </IconsWrapper>
    </Wrapper>
);

export default FooterHelp;

