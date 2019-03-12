import * as React from 'react';


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
import BetslipKeypad from '../BetslipKeypad';
import Overlay from '../BetslipKeypad/Overlay';

interface IBetslipDevelopItemState {
    showKeypad: boolean,
    showInfo: boolean,
}

class BetslipDevelopItem extends React.Component<{}, IBetslipDevelopItemState>{
    public state = { showKeypad: false, showInfo: false }
    public render() {
        const { showKeypad, showInfo } = this.state;
        return (
            <>{showKeypad &&
                <Overlay />}
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

                        <BetslipKeypad onConfermaClick={this.toggleKeypad} sistema={true} />
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
}

export default BetslipDevelopItem;