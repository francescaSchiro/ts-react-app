import * as React from 'react';

import Wrapper from './Wrapper';
import KeypadBodyWrapper from './KeypadBodyWrapper';
import ValuesWrapper from './ValuesWrapper';
import ValueKey from './ValueKey';
import ValuePreset from './ValuePreset';
import KeypadFooterButton from './KeypadFooterButton';


const valueKeys = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null
]

const valuePresets = [
    10, 20, 35, 50, 75, 100, 150, 200
]

interface IBetslipKeypad {
    sistema?: boolean,
}

const BetslipKeypad = (props: IBetslipKeypad) => (
    <Wrapper>
        <KeypadBodyWrapper>
            <ValuesWrapper width={60}>
                {valueKeys.map((el, i) => <ValueKey key={i}>{el}</ValueKey>)}
            </ValuesWrapper>
            <ValuesWrapper width={40}>
                {valuePresets.map((el, i) => <ValuePreset key={i}>€ {el}</ValuePreset>)}
            </ValuesWrapper>
        </KeypadBodyWrapper>
        {props.sistema &&
            <KeypadFooterButton>CONFERMA</KeypadFooterButton>
        }
    </Wrapper>
);

export default BetslipKeypad;