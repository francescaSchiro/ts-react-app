import * as React from 'react';
import styled from 'src/theme/default/index';

import TicketKeypad from 'src/components/TicketKeypad';

import Wrapper from './Wrapper';

interface Props {
    onImportClick: () => void,
    showKeypad: boolean,

}

const TicketFooter: React.FC<Props> = ({ onImportClick, showKeypad }) => (
    <Wrapper>

        <RowWrapper>
            <StakeAction>-</StakeAction>
            <StakeImport onClick={onImportClick}>€ 3,00</StakeImport>
            <StakeAction>+</StakeAction>
        </RowWrapper>
        {showKeypad && <TicketKeypad />}
        <RowWrapper>
            <Column>
                <Label>Quota totale</Label>
                <Value>2,70</Value>
            </Column>
            <Column>
                <Label>Bonus multipla</Label>
                <Value>€ 0,00</Value>
            </Column>
            <Column>
                <Label>Vincita potenziale</Label>
                <Value>€ 8,10</Value>
            </Column>
        </RowWrapper>

    </Wrapper>
);

const Column = styled.div`
    width: calc(100% / 3);
    padding: 5px;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Label = styled.div`
    box-sizing: border-box;
    padding-bottom: 5px;
    font-size: 11px;
    color: #bbb;
`;

const Value = styled.div`
    font-size: 11px;
    color: #fafafa;
    font-weight: bold;
`;
const RowWrapper = styled.div`
    width: 100%;

    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 12px;
    background-color: #393939;   
`;

const StakeAction = styled.div`
    box-sizing: border-box;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: #389b05;
    font-size: 18px;
    color: white;

    &:first-of-type{
        &::before {
        content:'Puntata';
        position: absolute;
        left: -170%;
        color: #bbb;
        font-style: normal;
        font-size: 11px;

        }
    }

`;

const StakeImport = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    background: #fff;
    color: #393939;
    height: 40px;
    width: 76px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 11px;
    font-weight: bold;
    border-radius: 2px;
`;

export default TicketFooter;