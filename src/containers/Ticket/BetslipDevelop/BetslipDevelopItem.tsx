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


interface IBetslipDevelopItemProps {
    infoToggle?: boolean;
}

interface IBetslipDevelopItemState {
    showKeypad: boolean,
}

class BetslipDevelopItem extends React.Component<IBetslipDevelopItemProps, IBetslipDevelopItemState>{
    public state = { showKeypad: false }

    public render() {
        const { showKeypad } = this.state;
        const { infoToggle } = this.props;
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
                            <ArrowDown infoToggle={infoToggle} />
                        </NumberArrowWrapper>
                    </BetslipDevelopItemWrapper>
                    {infoToggle && <BetslipDevelopItemInfo />}
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
}

export default BetslipDevelopItem;