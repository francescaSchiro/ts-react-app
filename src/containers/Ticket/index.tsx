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
};

class Ticket extends React.PureComponent<State> {
    public state: State = {
        ticketType: 1,
        emptyContent: ticketEmptyContent,
        bodyContent: ticketBodyContent,
    };

    public render() {
        const { ticketType, emptyContent, bodyContent } = this.state;
        return (
            <Wrapper>
                <TicketTabs ticketType={ticketType} onTabClick={this.changeTicketType} />
                {getTicketByType(ticketType, emptyContent, bodyContent)}
            </Wrapper>
        )
    }
    private changeTicketType = (clickedTicketType: number) => (
        this.setState({ ticketType: clickedTicketType })
    );
};

const getTicketByType = (ticketType: number, emptyContent: ITicketEmptyContent, bodyContent: ITicketBodyContent) => {
    switch (ticketType) {
        case 0: // empty
            return (
                <TicketEmpty content={emptyContent} />
            );
        case 1: // multipla e sistema (tabs attive)
            return (
                <TicketSingolaMultipla content={bodyContent} />
            );
        case 2: // only sistema (tab multipla disabled)
            return (
                <TicketSistema content={bodyContent} />
            );
        // case 1: // singola (tab sistema disabled)
        //     return (
        //         <TicketSingolaMultipla content={bodyContent} />
        //     );
        default:
            return null;
    };
};

export default Ticket;