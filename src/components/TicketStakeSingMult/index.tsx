import * as React from 'react';
import styled from 'src/theme/default/index';

import TicketInfoAlert from 'src/components/TicketInfoAlert';

import Wrapper from './Wrapper';


interface Props {
    onImportClick: () => void,
};

const TicketStakeSingMult: React.FC<Props> = ({ onImportClick }) => (
    <>
        <TicketInfoAlert
            error={true}
            message={'La puntata minima è di € 2,00'}
            infoIconUrl={'https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8'}
        />
        <Wrapper>
            <StakeAction>-</StakeAction>
            <StakeImport onClick={onImportClick} error={true}>€ 1,00</StakeImport>
            <StakeAction>+</StakeAction>
        </Wrapper>
    </>
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

interface IStakeImportProps {
    error: boolean,
}

const StakeImport = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    background: #fff;
    color: ${(props: IStakeImportProps) => props.error ? 'red' : '#393939'};
    height: 40px;
    width: 76px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 11px;
    font-weight: bold;
    border-radius: 2px;
`;

export default TicketStakeSingMult;
