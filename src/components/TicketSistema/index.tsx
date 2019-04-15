import * as React from 'react';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketButtons from 'src/components/TicketButtons';
import TicketBody from 'src/components/TicketBody';
import TicketSettings from 'src/components/TicketSettings';
import TicketFooter from 'src/components/TicketFooter';

import Wrapper from './Wrapper';


interface Props {
    sistema: boolean,
    content: ITicketBodyContent,
};

interface State {
    showKeypad: boolean,
};

class TicketSistema extends React.Component<Props, State>  {
    public state: State = { showKeypad: false };
    public render() {
        const { showKeypad } = this.state;
        const { sistema, content } = this.props;
        return (
            <Wrapper>
                <TicketBody 
                    sistema={sistema} 
                    content={content}
                />
                <TicketSettings />
                <TicketFooter
                    onImportClick={this.toggleKeypad}
                    showKeypad={showKeypad}
                    sistema={sistema}
                />
                <TicketButtons />
            </Wrapper >
        );
    }
    private toggleKeypad = () => {
        this.setState({ showKeypad: !this.state.showKeypad })
    }
};

export default TicketSistema;