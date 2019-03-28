import * as React from 'react';
import styled from 'src/theme/default/index';

import { ITicketEmptyContent } from 'src/models/ITicketEmptyContent';
import { ITicketEmptyContentCategory } from 'src/models/ITicketEmptyContentCategory';
import { ITicketEmptyContentCategoryLink } from 'src/models/ITicketEmptyContentCategoryLink';

import Wrapper from './Wrapper';


interface Props {
    content: ITicketEmptyContent;
}

const TicketEmpty: React.FC<Props> = ({ content }) => {
    const { message, categories } = content;
    return (
        <Wrapper>
            <BodyWrapper>
                <Message>
                    {message}
                </Message>
                {categories.map((cat: ITicketEmptyContentCategory) => {
                    const { name, links } = cat;
                    return (
                        <>
                            <Category>{name}</Category>
                            {links.map((link: ITicketEmptyContentCategoryLink) => {
                                const { linkName, eventsNumber, url } = link;
                                return (
                                    <LinkWrapper key={linkName} href={url}>
                                        <LinkName>{linkName}</LinkName>
                                        <LinkEvents>({eventsNumber})</LinkEvents>
                                    </LinkWrapper>
                                )
                            })}
                        </>
                    );
                }
                )}
            </BodyWrapper>
        </Wrapper>
    );
};

const BodyWrapper = styled.div`
    padding-top: 42px; /* same as BetslipHeadWrapper height */
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Message = styled.div`
    background: #eaeaea;
    border-bottom: 1px solid rgba(213,213,213,.5);
    font-size: 12px;
    padding: 1.8em 1em;
    line-height: 14px;
`;

const Category = styled.div`
    background: #B9D300;
    color: #393939;
    padding: .3em 1em;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
`;

const LinkWrapper = styled.a`
    all: unset;
    /* height: 46px; */
    display:flex;
    justify-content: flex-start;
    align-items: center;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/ic_arrow_right.png?v=2.6.8');
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: 96% center;
    margin-left: 5px;
    margin-right: 5px;
    border-bottom: 1px solid #dddddd;
`;

const LinkName = styled.span`
    padding: 16px 0 16px 16px;
    margin-right: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #4a4a4a;
`;

const LinkEvents = styled.span`
    font-size: 12px;
    color: #909090;
`;

export default TicketEmpty;