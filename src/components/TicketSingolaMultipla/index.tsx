import * as React from 'react';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketBody from 'src/components/TicketBody';
import TicketSettings from 'src/components/TicketSettings';
import TicketFooter from 'src/components/TicketFooter';
import TicketButtons from 'src/components/TicketButtons';
import TicketInfoAlert from 'src/components/TicketInfoAlert';

import Wrapper from './Wrapper';


interface State {
    showKeypad: boolean,
};

interface Props {
    content: ITicketBodyContent,
    sistema: boolean,
    betsCount: number,
};

class TicketSingolaMultipla extends React.Component<Props, State> {
    public state: State = { showKeypad: false }
    public render() {
        const { showKeypad } = this.state;
        const { content, betsCount } = this.props;
        return (
            <Wrapper>
                <TicketBody content={content} sistema={false} />
                <TicketInfoAlert
                    error={true}
                    message={'La puntata minima è di € 2,00'}
                    infoIconUrl={'https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8'}
                />
                {betsCount === 1
                    ? null
                    :
                    <TicketSettings />
                }
                <TicketFooter
                    onImportClick={this.toggleKeypad}
                    showKeypad={showKeypad}
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