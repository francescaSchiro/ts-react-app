import * as React from 'react';

import TicketTabs from 'src/components/TicketTabs';
import TicketEmpty from 'src/components/TicketEmpty';
import TicketSingolaMultipla from 'src/components/TicketSingolaMultipla';
import TicketSistema from 'src/components/TicketSistema';
import ticketEmptyContent from 'src/mocks/ticketEmptyContent';
import ticketBodyContent from 'src/mocks/ticketBodyContent';
import { ITicketEmptyContent } from 'src/models/ITicketEmptyContent';
import { ITicketBodyContent } from 'src/models/ITicketBodyContent';

import Wrapper from './Wrapper';


interface State {
    ticketType: number, // 0 | 1 | 2  => 0 = empty, 1 = sigolaMultipla, 2 = sistema // 0 = empty, 1 = singola, 2 = multipla&sistema, 3 = onlysistema
    emptyContent: ITicketEmptyContent;
    bodyContent: ITicketBodyContent;
    betsCount: number;
};

class Ticket extends React.PureComponent<State> {
    public state: State = {
        ticketType: 2,
        emptyContent: ticketEmptyContent,
        bodyContent: ticketBodyContent,
        betsCount: 1,
    };

    public render() {
        const { ticketType, emptyContent, bodyContent, betsCount } = this.state;
        return (
            <Wrapper>
                <TicketTabs betsCount={betsCount} ticketType={ticketType} onTabClick={this.changeTicketType} />
                {betsCount === 0
                    ? <TicketEmpty content={emptyContent} />
                    : getTicketByType(ticketType, bodyContent, betsCount)
                }
            </Wrapper>
        )
    }
    private changeTicketType = (clickedTicketType: number) => (
        this.setState({ ticketType: clickedTicketType })
    );
};

const getTicketByType = (ticketType: number, bodyContent: ITicketBodyContent, betsCount: number) => {
    switch (ticketType) {
        case 1:
            return (
                <TicketSingolaMultipla betsCount={betsCount} sistema={false} content={bodyContent} />
            );
        case 2:
            return (
                <TicketSistema sistema={true} content={bodyContent} />
            );
        default:
            return null;
    };
};

export default Ticket;