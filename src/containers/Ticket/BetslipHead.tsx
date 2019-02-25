import * as React from 'react';
import styled from '../../theme/default/index';

const BetslipHeadWrapper = styled.div`
    height:42px;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: #222;
    border-bottom: 3px solid #f7a81e;
    color: white;

    font-size: 12px;
`;

const BetslipHeadTabs = styled.div`
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    padding: 0 1em;
    font-weight: bold;
`;

const BetslipHeadTab = styled.div`
    height: 100%;
    border-bottom: 3px solid transparent;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items:center;
    text-transform: uppercase;
    z-index:1;

    &:not(:last-of-type){
        margin-right: 3.3em;  color: #f7a81e;
        border-bottom-color: #f7a81e;
    }
    &:last-of-type {
        color: #909090;
    }
`;

const BetslipHeadBack = styled.div`
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    padding: 0 1em;
    font-weight: normal;
`;

const BetslipHead = () => (
    <BetslipHeadWrapper>
        <BetslipHeadTabs>
            <BetslipHeadTab> SINGOLA </BetslipHeadTab>
            <BetslipHeadTab> SISTEMA </BetslipHeadTab>
        </BetslipHeadTabs>
        <BetslipHeadBack> Chiudi </BetslipHeadBack>
    </BetslipHeadWrapper>
);

export default BetslipHead;