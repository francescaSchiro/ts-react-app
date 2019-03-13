import * as React from 'react';

import Wrapper from './Wrapper';
import BetslipBody from './BetslipBody';
import BetslipHead from './BetslipHead';
import SettingsDefaultBlock from './SettingsDefaultBlock';
import BetslipFooter from './BetslipFooter';
import Buttons from './Buttons';
import InfoAlert from './InfoAlert';
import InfoIcon from './InfoIcon';

class Multipla extends React.PureComponent {
    public state = { showKeypad: false }

    public render() {
        const { showKeypad } = this.state;
        return (
            <Wrapper>
                <BetslipHead />
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

export default Multipla;