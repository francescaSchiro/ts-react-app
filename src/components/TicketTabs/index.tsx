import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';

interface Props {
    sistema: boolean,
    betsCount: number,
    onTabClick: (isSistema: boolean) => void,
}

const TicketTabs: React.FC<Props> = ({ sistema, betsCount, onTabClick }) => {

    return (
        <Wrapper>
            {betsCount === 0
                ? (
                <TabsWrapperEmpty>
                    <Tab active={true} style={{ borderBottom: '0px' }}>
                        IL TUO BIGLIETTO È VUOTO
                    </Tab>
                    <NavLink to={'/'} style={{ all: 'unset' }}>
                        <BetslipHeadBack>
                            Chiudi
                        </BetslipHeadBack>
                    </NavLink>
                </TabsWrapperEmpty> )
                : (
                <TabsWrapper>
                    <Tab active={!sistema} onClick={onTabClick.bind(null, false)}>
                        {betsCount === 1
                            ? 'SINGOLA'
                            : 'MULTIPLA'
                        }
                    </Tab>
                    <Tab active={sistema} onClick={onTabClick.bind(null, true)}>
                        SISTEMA
                    </Tab>
                    <NavLink to={'/'} style={{ all: 'unset' }}>
                        <BetslipHeadBack>
                            Chiudi
                        </BetslipHeadBack>
                    </NavLink>
                </TabsWrapper> )
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

