import * as React from 'react';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketBody from 'src/components/TicketBody';
import TicketSettings from 'src/components/TicketSettings';
import TicketFooter from 'src/components/TicketFooter';
import TicketButtons from 'src/components/TicketButtons';

import Wrapper from './Wrapper';


interface Props {
    sistema: boolean,
    betsCount: number,
    content: ITicketBodyContent,
};

interface State {
    showKeypad: boolean,
};

class TicketSingolaMultiplaSistema extends React.Component<Props, State> {
    public state: State = { showKeypad: false }
    public render() {
        const { showKeypad } = this.state;
        const { sistema, betsCount, content } = this.props;
        return (
            <Wrapper>
                <TicketBody
                    sistema={sistema}
                    content={content}
                />
                {betsCount === 1
                    ? null
                    :
                    <TicketSettings />
                }
                <TicketFooter
                    onImportClick={this.toggleKeypad}
                    showKeypad={showKeypad}
                    sistema={sistema}
                />
                <TicketButtons />
            </Wrapper>
        )
    }
    private toggleKeypad = () => {
        this.setState({ showKeypad: !this.state.showKeypad })
    }
};

export default TicketSingolaMultiplaSistema;