import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipHead from './BetslipHead';
import BetslipEmptyMessage from './BetslipEmptyMessage';
import BetslipEmptyCategory from './BetslipEmptyCategory';
import BetslipEmptyLinkWrapper from './BetslipEmptyLinkWrapper';
import BetslipEmptyLinkName from './BetslipEmptyLinkName';
import BetslipEmptyLinkEvents from './BetslipEmptyLinkEvents';
import BodyWrapper from './BetslipBody/Wrapper';



const BetslipEmpty = () => (
    <Wrapper>
        <BetslipHead empty={true} />
        <BodyWrapper>
            <BetslipEmptyMessage>
                Naviga le sezioni Live, Scommesse e seleziona le scommesse toccando le quote.
            </BetslipEmptyMessage>

            <BetslipEmptyCategory>Live</BetslipEmptyCategory>

            <BetslipEmptyLinkWrapper>
                <BetslipEmptyLinkName> Scommesse Live</BetslipEmptyLinkName>
                <BetslipEmptyLinkEvents>(58)</BetslipEmptyLinkEvents>
            </BetslipEmptyLinkWrapper>
        </BodyWrapper>
    </Wrapper>
);

export default BetslipEmpty;