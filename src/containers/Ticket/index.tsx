import * as React from 'react';

import TicketTabs from 'src/components/TicketTabs';
import TicketEmpty from 'src/components/TicketEmpty';
import TicketSingolaMultipla from 'src/containers/TicketSingolaMultipla';
import TicketSistema from 'src/containers/TicketSistema';
import ticketEmptyContent from 'src/mocks/ticketEmptyContent';
import { ITicketEmptyContent } from 'src/models/ITicketEmptyContent';

import Wrapper from './Wrapper';


interface State {
    ticketType: number, // 0 | 1 | 2 | 30 = empty, 1 = singola, 2 = multipla&sistema, 3 = onlysistema
};

interface Props {
    emptyContent: ITicketEmptyContent;
};

class Ticket extends React.PureComponent<Props, State> {
    public static defaultProps = {
        emptyContent: ticketEmptyContent,
    };
    public state: State = {
        ticketType: 2,
    };

    public render() {
        const { ticketType } = this.state;
        const { emptyContent } = this.props;
        return (
            <Wrapper>
                <TicketTabs ticketType={ticketType} onTabClick={this.changeTicketType} />
                {getTicketType(ticketType, emptyContent)}
            </Wrapper>
        )
    }
    private changeTicketType = (clickedTicketType: number) => (
        this.setState({ ticketType: clickedTicketType })
    );
};

const getTicketType = (ticketType: number, emptyContent: ITicketEmptyContent) => {
    switch (ticketType) {
        case 0: // empty
            return (
                <TicketEmpty content={emptyContent} />
            );
        case 1: // singola (tab sistema disabled)
            return (
                <TicketSingolaMultipla />
            );
        case 2: // multipla e sistema (tabs attive)
            return (
                <TicketSingolaMultipla />
            );
        case 3: // only sistema (tab multipla disabled)
            return (
                <TicketSistema />
            );
        default:
            return null;
    };
};

export default Ticket;