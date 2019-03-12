import * as React from 'react';

import Wrapper from './Wrapper';
import BetExtra from './BetExtra';
import BetData from './BetData';
import BetActions from './BetActions';
import BetDetail from './BetDetail';
import InfoTimezone from './InfoTimezone';
import Title from './Title';
import Info from './Info';
import Game from './Game';
import DeleteIcon from '../../DeleteIcon';
import EditIcon from './EditIcon';
import MicroGame from './MicroGame';
import Odd from './Odd';
import Fixed from './Fixed';
import FixedCheckbox from './FixedCheckbox';
import ModalBox from '../../ModalBox';
import Overlay from '../../Overlay';


export interface BetslipBodyItemState {
    isChecked: boolean,
    showModalBox: boolean,
}
export interface BetslipBodyItemProps {
    sistema?: boolean;
}

class BetslipBodyItem extends React.Component<BetslipBodyItemProps, BetslipBodyItemState>{
    public state = { isChecked: false, showModalBox: false }
    public render() {
        const { sistema } = this.props;
        const { isChecked, showModalBox } = this.state;
        return (
            <>
                <Wrapper>

                    <BetData>
                        <BetExtra>
                            {sistema &&
                                < >
                                    <Fixed onClick={this.toggleFixed} checked={isChecked}>F</Fixed>
                                    <FixedCheckbox onClick={this.toggleFixed} checked={isChecked} />
                                </>
                            }
                        </BetExtra>
                        <BetDetail>
                            <InfoTimezone>29091 - 6099 | 27/2/2019 ore 21:00</InfoTimezone>
                            <Title>Fiorentina - Atalanta</Title>
                            <Info>
                                <Game>
                                    <DeleteIcon display={true} />
                                    Esito finale 1x2:
                            <Odd> 2 (-)</Odd>
                                </Game>
                                <MicroGame>Esito chiuso o sospeso</MicroGame>
                            </Info>
                        </BetDetail>
                    </BetData>

                    <BetActions>
                        <DeleteIcon display={false} />

                        <EditIcon onClick={this.toggleModalBox} />
                    </BetActions>

                </Wrapper>
                {showModalBox && <>
                    <Overlay />
                    <ModalBox onChiudiClick={this.toggleModalBox} /></>}
            </>
        )
    }
    private toggleFixed = () => {
        this.setState({ isChecked: !this.state.isChecked })
    }
    private toggleModalBox = () => {
        this.setState({ showModalBox: !this.state.showModalBox })
    }
}


export default BetslipBodyItem;