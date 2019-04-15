import * as React from 'react';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketBody from 'src/components/TicketBody';
import TicketSettings from 'src/components/TicketSettings';
import TicketFooter from 'src/components/TicketFooter';
import TicketButtons from 'src/components/TicketButtons';
// import TicketInfoAlert from 'src/components/TicketInfoAlert';

import Wrapper from './Wrapper';


interface State {
    showKeypad: boolean,
};

interface Props {
    sistema: boolean,
    betsCount: number,
    content: ITicketBodyContent,
};

class TicketSingolaMultipla extends React.Component<Props, State> {
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

export default TicketSingolaMultipla;