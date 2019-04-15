import * as React from 'react';

import TicketTabs from 'src/components/TicketTabs';
import TicketEmpty from 'src/components/TicketEmpty';
import TicketSingolaMultiplaSistema from 'src/components/TicketSingolaMultiplaSistema';
import ticketEmptyContent from 'src/mocks/ticketEmptyContent';
import ticketBodyContent from 'src/mocks/ticketBodyContent';
import { ITicketEmptyContent } from 'src/models/ITicketEmptyContent';
import { ITicketBodyContent } from 'src/models/ITicketBodyContent';

import Wrapper from './Wrapper';


interface State {
    sistema: boolean, // 1 | 2  => 0 = empty, 1 = sigolaMultipla, 2 = sistema // 0 = empty, 1 = singola, 2 = multipla&sistema, 3 = onlysistema
    emptyContent: ITicketEmptyContent;
    bodyContent: ITicketBodyContent;
    betsCount: number;
};

class Ticket extends React.PureComponent<State> {
    public state: State = {
        betsCount: 1,
        sistema: false,
        emptyContent: ticketEmptyContent,
        bodyContent: ticketBodyContent,

    };

    public render() {
        const { sistema, emptyContent, bodyContent, betsCount } = this.state;
        return (
            <Wrapper>
                <TicketTabs
                    betsCount={betsCount}
                    sistema={sistema}
                    onTabClick={this.changeTab}
                />
                {betsCount === 0
                    ? <TicketEmpty content={emptyContent} />
                    : <TicketSingolaMultiplaSistema
                        sistema={sistema}
                        betsCount={betsCount}
                        content={bodyContent}
                    />
                }
            </Wrapper>
        )
    }
    private changeTab = (isSistema: boolean) => (
        this.setState({ sistema: isSistema })
    );
};

export default Ticket;