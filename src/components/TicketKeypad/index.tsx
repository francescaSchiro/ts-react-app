import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const valueKeys = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null
]

const valuePresets = [
    10, 20, 35, 50, 75, 100, 150, 200
]

interface Props {
    sistema: boolean,
    onConfermaClick?: () => void,
}

const TicketKeypad: React.FC<Props> = ({ sistema, onConfermaClick }) => (
    <Wrapper>
        <KeypadBodyWrapper>
            <ValuesWrapper width={60}>
                {valueKeys.map((el, i) => <ValueKey key={i}>{el}</ValueKey>)}
            </ValuesWrapper>
            <ValuesWrapper width={40}>
                {valuePresets.map((el, i) => <ValuePreset key={i}>€ {el}</ValuePreset>)}
            </ValuesWrapper>
        </KeypadBodyWrapper>
        {sistema
            ? <KeypadFooterButton onClick={onConfermaClick}>CONFERMA</KeypadFooterButton>
            : null
        }
    </Wrapper>
);

const KeypadBodyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
interface IValuesWrapperProps {
    width: number,
}

const ValuesWrapper = styled.div`
    width: ${(props: IValuesWrapperProps) => `${props.width}%`};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const ValueKey = styled.div`
    width: calc(100% / 3);
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #222;
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
    &:nth-child(3n+0) {
        border-right: 0;
    }
    &:nth-child(n+10) {
        border-bottom: 0;
    }

    &:nth-child(12) {
        background: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_backspace.png?v=2.6.8') center no-repeat #fff;
        background-size: auto 68%;
    }  
`

const ValuePreset = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: #fff;
    background: #389b05;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;

    &:nth-child(even) {
        border-right: 0;
    }

    /*from 7th child on*/
    &:nth-child(n+7){
        border-bottom: 0;
    }

    /*from 7th to 8th child included 
        &:nth-child(n+7):nth-child(-n+8)
    */
`;

const KeypadFooterButton = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #d5d5d5;
    color: #222;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
`





export default TicketKeypad;