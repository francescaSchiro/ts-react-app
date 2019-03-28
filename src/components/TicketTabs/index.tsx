import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';

// betslipType: number, // 
// 0=> empty, 
// 1: singola sistema disabled, 
// 2: multipla / sistema, 
// 3: only sistema.
// se betsCount === 0 scommesse: empty;
// se betsCount === 1: singola. checkSistema(betslip) => se true mostra solo sistema e disabilita singola route.
// se betsCount > 1: multipla. checkSistema(betslip) => se true mostra solo sistema e disabilita multipla route. se non mostra tutte e 2.
const getTicketHeaderType = (ticketType: number, onTabClick: (clickedTicketType: number) => void) => {
    switch (ticketType) {
        case 0: // empty
            return (
                <TabsWrapperEmpty>
                    <Tab style={{ color: '#f7a81e' }}>
                        IL TUO BIGLIETTO È VUOTO
                    </Tab>
                    <NavLink to={'/'} style={{ all: 'unset' }}>
                        <BetslipHeadBack>
                            Chiudi
                        </BetslipHeadBack>
                    </NavLink>
                </TabsWrapperEmpty>
            );
        case 1: // singola
            return (
                <TabsWrapper>
                    <Tab style={{ color: '#f7a81e', borderBottomColor: '#f7a81e' }} onClick={onTabClick.bind(null, 2)}>
                        SINGOLA
                    </Tab>
                    {/* should be disabled <Tab style={{ pointerEvents: 'none', }} onClick={onTabClick.bind(null, 3)}> */}
                    <Tab style={{ pointerEvents: 'none', }} onClick={onTabClick.bind(null, 3)}>
                        SISTEMA
                    </Tab>
                </TabsWrapper>
            );
        case 2: // multipla e sistema
            return (
                <TabsWrapper>
                    <Tab style={{ color: '#f7a81e', borderBottomColor: '#f7a81e' }} onClick={onTabClick.bind(null, 2)}>
                        MULTIPLA
                    </Tab>
                    <Tab onClick={onTabClick.bind(null, 3)}>
                        SISTEMA
                    </Tab>

                    <NavLink to={'/'} style={{ all: 'unset' }}>
                        <BetslipHeadBack>
                            Chiudi
                        </BetslipHeadBack>
                    </NavLink>
                </TabsWrapper>
            );
        case 3: // only sistema
            return (
                <TabsWrapper>
                    {/*should be disabled <Tab style={{ pointerEvents: 'none', }} onClick={onTabClick.bind(null, 2)}> */}
                    <Tab onClick={onTabClick.bind(null, 2)}>
                        MULTIPLA
                    </Tab>

                    <Tab style={{ color: '#f7a81e', borderColor: '#f7a81e' }}>
                        SISTEMA
                    </Tab>

                    <NavLink to={'/'} style={{ all: 'unset' }}>
                        <BetslipHeadBack>
                            Chiudi
                    </BetslipHeadBack>
                    </NavLink>
                </TabsWrapper>
            )
        default:
            return null;
    }
};
interface Props {
    ticketType: number,
    onTabClick: (clickedTicketType: number) => void;
};

const TicketTabs: React.FC<Props> = ({ ticketType, onTabClick }) => (
    <Wrapper>
        {getTicketHeaderType(ticketType, onTabClick)}
    </Wrapper>
);

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

const Tab = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #909090;
    text-decoration: none;
    height:105%;
    border-bottom: 3px solid #222; 

    font-size: 12px;
    text-transform: uppercase;

    &:not(:last-of-type){
        margin-right: 3.3em;
    }

`;

export default TicketTabs;

