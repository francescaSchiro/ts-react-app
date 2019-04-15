import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


/* betslipType: number, // 
 0=> empty, 
 1: singola sistema disabled, 
 2: multipla / sistema, 
 3: only sistema.
 se betsCount === 0 scommesse: empty;
 se betsCount === 1: singola. checkSistema(betslip) => se true mostra solo sistema e disabilita singola route.
 se betsCount > 1: multipla. checkSistema(betslip) => se true mostra solo sistema e disabilita multipla route. se non mostra tutte e 2. */
const getTicketHeaderType = (ticketType: number, onTabClick: (clickedTicketType: number) => void, betsCount: number) => {
    switch (ticketType) {
        case 1: // singolaMultipla e sistema
            return (
                <>
                    <Tab active={true} onClick={onTabClick.bind(null, 1)}>
                        {betsCount === 1
                            ? 'SINGOLA'
                            : 'MULTIPLA'
                        }
                    </Tab>
                    <Tab active={false} onClick={onTabClick.bind(null, 2)}>
                        SISTEMA
                        </Tab>
                </>
            );
        case 2: // only sistema
            return (
                <>
                    {/*should be disabled <Tab style={{ pointerEvents: 'none', }} onClick={onTabClick.bind(null, 2)}> */}
                    <Tab onClick={onTabClick.bind(null, 1)} active={false}>
                        MULTIPLA
                    </Tab>

                    <Tab active={true} onClick={onTabClick.bind(null, 2)} >
                        SISTEMA
                    </Tab>
                </>
            );
        default:
            return null;
    }
};
interface Props {
    ticketType: number,
    onTabClick: (clickedTicketType: number) => void,
    betsCount: number,
}

const TicketTabs: React.FC<Props> = ({ ticketType, onTabClick, betsCount }) => {

    return (
        <Wrapper>
            {betsCount === 0
                ? <TabsWrapperEmpty>
                    <Tab active={true} style={{ borderBottom: '0px' }}>
                        IL TUO BIGLIETTO È VUOTO
                    </Tab>
                    <NavLink to={'/'} style={{ all: 'unset' }}>
                        <BetslipHeadBack>
                            Chiudi
                        </BetslipHeadBack>
                    </NavLink>
                </TabsWrapperEmpty>
                : <TabsWrapper>
                    {getTicketHeaderType(ticketType, onTabClick, betsCount)}
                    <NavLink to={'/'} style={{ all: 'unset' }}>
                        <BetslipHeadBack>
                            Chiudi
                        </BetslipHeadBack>
                    </NavLink>
                </TabsWrapper>
            }
        </Wrapper>
    );
};

const TabsWrapperEmpty = styled.div`
    position: relative;
    height: 95%;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    font-weight: bold;
`;
const TabsWrapper = styled.div`
    position: relative;
    height: 95%;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1em;
    font-weight: bold;
`;
const BetslipHeadBack = styled.div`
    height: 100%;
    position:absolute;
    top:0;
    right:0;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    font-weight: normal;
`;

interface ITabProps {
    active: boolean,
}
const Tab = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props: ITabProps) => props.active ? '#f7a81e' : '#909090'};
    text-decoration: none;
    height:105%;
    border-bottom: 3px solid ${(props: ITabProps) => props.active ? '#f7a81e' : '#222'}; 
    font-size: 12px;
    text-transform: uppercase;

    &:not(:last-of-type){
        margin-right: 3.3em;
    }

`;

export default TicketTabs;

