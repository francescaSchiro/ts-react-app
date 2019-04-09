import * as React from 'react';
import styled from 'src/theme/default/index';


// import RowWrapper from './BetslipFooter/RowWrapper';
// import Column from './BetslipFooter/Column';
// import Label from './BetslipFooter/Label';
// import Value from './BetslipFooter/Value';


const BetslipFooterRow = () => (
    <RowWrapper>
        <Column>
            <Label>Puntata</Label>
            <Value>€ 28,00</Value>
        </Column>
        <Column>
            <Label>Vincita minima</Label>
            <Value>€ 3,48</Value>
        </Column>
        <Column>
            <Label>Vincita potenziale</Label>
            <Value>€ 597,50</Value>
        </Column>
    </RowWrapper>
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

export default BetslipFooterRow;