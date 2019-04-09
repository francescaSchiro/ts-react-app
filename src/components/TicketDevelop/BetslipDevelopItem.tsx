import * as React from 'react';
import styled from 'src/theme/default/index';

import BetslipDevelopWrapper from './BetslipDevelopWrapper';
import BetslipDevelopItemWrapper from './BetslipDevelopItemWrapper';
import IconEye from './IconEye';
import RowWrapper from './RowWrapper';
import StakeAction from './StakeAction';
import StakeImport from './StakeImport';
import NumberArrowWrapper from './NumberArrowWrapper';
import ArrowDown from './ArrowDown';
import DevelopNumber from './DevelopNumber';
import BetslipDevelopItemInfo from './BetslipDevelopItemInfo';
import TicketKeypad from 'src/components/TicketKeypad';

interface IBetslipDevelopItemState {
    showKeypad: boolean,
    showInfo: boolean,
}

class BetslipDevelopItem extends React.Component<{}, IBetslipDevelopItemState>{
    public state = { showKeypad: false, showInfo: false }
    public render() {
        const { showKeypad, showInfo } = this.state;
        return (
            <>
                <BetslipDevelopWrapper>

                    <BetslipDevelopItemWrapper>
                        <IconEye />
                        <RowWrapper>
                            <StakeAction>-</StakeAction>
                            <StakeImport onClick={this.toggleKeypad}>€ 3,00</StakeImport>
                            <StakeAction>+</StakeAction>
                        </RowWrapper>

                        <NumberArrowWrapper>
                            <DevelopNumber>x1</DevelopNumber>
                            <ArrowDown onClick={this.toggleInfo} showInfo={showInfo} />
                        </NumberArrowWrapper>
                    </BetslipDevelopItemWrapper>
                    {showInfo && <BetslipDevelopItemInfo />}
                </BetslipDevelopWrapper>
                {showKeypad &&
                    <>
                        <Overlay />
                        <TicketKeypad onConfermaClick={this.toggleKeypad} sistema={true} />
                    </>
                }
            </>
        )
    }
    private toggleKeypad = () => {
        this.setState({ showKeypad: !this.state.showKeypad })
    }
    private toggleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo })
    }
};


const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,.75);
    z-index: 8000;
`

export default BetslipDevelopItem;