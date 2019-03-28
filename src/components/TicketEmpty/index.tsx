import * as React from 'react';
import styled from 'src/theme/default/index';

import { ITicketEmptyContent } from 'src/models/ITicketEmptyContent';
import Wrapper from './Wrapper';

interface Props {
    content: ITicketEmptyContent;
}

const TicketEmpty: React.FC<Props> = () => (
    <Wrapper>
        <BodyWrapper>
            <Message>
                Naviga le sezioni Live, Scommesse e seleziona le scommesse toccando le quote.
                Clicca sopra per MULTIPLA e SISTEMA.
            </Message>
            {/* live */}
            <Category>Live</Category>

            <LinkWrapper>
                <LinkName> Scommesse Live</LinkName>
                <LinkEvents>(58)</LinkEvents>
            </LinkWrapper>
            {/* scommesse */}
            <Category>Scommesse</Category>
            <LinkWrapper>
                <LinkName>Calcio</LinkName>
                <LinkEvents>(892)</LinkEvents>
            </LinkWrapper>
            <LinkWrapper>
                <LinkName>Tennis</LinkName>
                <LinkEvents>(52)</LinkEvents>
            </LinkWrapper>
            <LinkWrapper>
                <LinkName>Basket</LinkName>
                <LinkEvents>(93)</LinkEvents>
            </LinkWrapper>
            <LinkWrapper>
                <LinkName>Volley</LinkName>
                <LinkEvents>(53)</LinkEvents>
            </LinkWrapper>
        </BodyWrapper>
    </Wrapper>
);

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

const LinkWrapper = styled.div`
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