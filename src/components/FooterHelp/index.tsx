import * as React from 'react';
import styled from 'src/theme/default/index';

import { IFooterHelpIcon } from 'src/models/IFooterHelpIcon';

import Wrapper from './Wrapper';


interface Props {
    icons: IFooterHelpIcon[],
};

const FooterHelp: React.FC<Props> = ({ icons }) => (
    <Wrapper>
        <HelpTitle>Cerchi Aiuto?</HelpTitle>
        <IconsWrapper>
            {icons.map((icon: IFooterHelpIcon) => {
                const { url, label, iconId } = icon;
                return (
                    <IconLabelWrapper key={label} href={url}>
                        <Icon iconId={iconId} />
                        <Label>{label}</Label>
                    </IconLabelWrapper>
                )
            }
            )}
        </IconsWrapper>
    </Wrapper>
);

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

export default FooterHelp;

