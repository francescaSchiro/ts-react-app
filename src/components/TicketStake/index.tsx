import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


interface Props {
    onImportClick: () => void,
    error: boolean,
    sistema?: boolean,
};

const TicketStake: React.FC<Props> = ({ onImportClick, error, sistema }) => (
    <Wrapper sistema={sistema}>
        <StakeAction>-</StakeAction>
        <StakeImport onClick={onImportClick} error={error}>{sistema ? '€ 3,00' : '€ 1,00'}</StakeImport>
        <StakeAction>+</StakeAction>
    </Wrapper>
);

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
`;
interface IStakeImportProps {
    error: boolean,
};
const StakeImport = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: ${ (props: IStakeImportProps) => props.error ? 'red' : '#393939'};
    height: 40px;
    width: 76px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 11px;
    font-weight: bold;
    border-radius: 2px;
`;

export default TicketStake;