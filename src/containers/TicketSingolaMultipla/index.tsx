import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipBody from '../Ticket/BetslipBody';
import SettingsDefaultBlock from '../Ticket/SettingsDefaultBlock';
import BetslipFooter from '../Ticket/BetslipFooter';
import Buttons from '../Ticket/Buttons';
import InfoAlert from '../Ticket/InfoAlert';
import InfoIcon from '../Ticket/InfoIcon';


interface State {
    showKeypad: boolean,
}
class TicketSingolaMultipla extends React.PureComponent<{}, State> {
    public state: State = { showKeypad: false }

    public render() {
        const { showKeypad } = this.state;
        return (
            <Wrapper>
                <BetslipBody />
                <InfoAlert error={true}>
                    <InfoIcon />
                    La puntata minima è di € 2,00
                </InfoAlert>
                <SettingsDefaultBlock />
                <BetslipFooter onImportClick={this.toggleKeypad} showKeypad={showKeypad} />
                <Buttons />
            </Wrapper>
        )
    }
    private toggleKeypad = () => {
        this.setState({ showKeypad: !this.state.showKeypad })
    }
};

export default TicketSingolaMultipla;