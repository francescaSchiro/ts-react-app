import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import { IAppItem } from 'src/models/IAppItem';


interface Props {
    items: IAppItem[],
}
class AllApps extends React.Component<Props> {
    public render() {
        const { items } = this.props;
        return (
            <Wrapper>
                <TitleLinkWrapper>
                    <Title>Tutte le App Scommesse</Title>
                    <Link href='https://m.sisal.it/app-mobile'>Scopri tutte le App</Link>
                </TitleLinkWrapper>
                <IconsWrapper>
                    {items.map((item: IAppItem) =>
                        <IconLabelWrapper key={item.description} onClick={this.goToUrl.bind(this, item.goToUrl)}>
                            <Icon src={item.iconUrl} />
                            <Description>{item.description}</Description>
                        </IconLabelWrapper>
                    )}
                </IconsWrapper>
            </Wrapper>
        );
    };

    private goToUrl = (url: string) => {
        window.open(
            url,
            '_blank'
        )
    };
};

const TitleLinkWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    width:50%;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    color: #333;
    text-align: left;
`
const Link = styled.a`
    all: unset;
    position: relative;
    color: #666666;
    font-size: 13px;
    font-weight: normal;
    padding: 15px 28px 15px 15px;
    &::after{
        content:'';
        position: absolute;
        width: 5px;
        height: 5px;
        margin-top: 3px;
        margin-left: 10px;
        border-right: 1px solid #4a4a4a;
        border-bottom: 1px solid #4a4a4a;
        transform: translate(-50%, 18%) rotate(-45deg);
    }
`
const IconsWrapper = styled.div`
    display: inline-flex;
    width:100%;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 0 15px 15px;
`
const IconLabelWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   margin-right: 23px;
`
const Icon = styled.img`
    width:75px;
    height:75px;
`
const Description = styled.div`
   font-size: 10px;
   font-weight: normal;
   color: #4a4a4a; 
   margin-top: 10px;
`

export default AllApps;