import * as React from 'react';

import { IPronosticoItem } from 'src/models/IPronosticoItem';

import Wrapper from './Wrapper';
import BetExtra from './BetExtra';
import BetData from './BetData';
import BetActions from './BetActions';
import BetDetail from './BetDetail';
import InfoTimezone from './InfoTimezone';
import Title from './Title';
import Info from './Info/index';
import DeleteIcon from '../../DeleteIcon';
import EditIcon from './EditIcon';

import Fixed from './Fixed';
import FixedCheckbox from './FixedCheckbox';
import ModalBox from '../../ModalBox';
import Overlay from '../../Overlay';


export interface State {
    isChecked: boolean,
    showModalBox: boolean,

}
export interface Props {
    sistema: boolean,
    pronosticoList: IPronosticoItem[],
}

class TicketBodyItems extends React.Component<Props, State>{
    public state: State = { isChecked: false, showModalBox: false }
    public render() {
        const { sistema, pronosticoList } = this.props;
        const { isChecked, showModalBox } = this.state;
        return (
            <>
                <Wrapper>

                    <BetData>
                        <BetExtra>
                            {sistema
                                ? < >
                                    <Fixed onClick={this.toggleFixed} checked={isChecked}>F</Fixed>
                                    <FixedCheckbox onClick={this.toggleFixed} checked={isChecked} />
                                </>
                                : null
                            }
                        </BetExtra>
                        <BetDetail>
                            <InfoTimezone>{avvenimentoKey} | {formattedDataAvvenimento}</InfoTimezone>
                            <Title>{descrizioneAvvenimento}</Title>
                            <Info />
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


export default TicketBodyItems;