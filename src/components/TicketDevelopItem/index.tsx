import * as React from 'react';
import styled from 'src/theme/default/index';

import TicketStake from 'src/components/TicketStake';

import NumberArrowWrapper from '../TicketDevelop/NumberArrowWrapper';
import ArrowDown from '../TicketDevelop/ArrowDown';
import DevelopNumber from '../TicketDevelop/DevelopNumber';
import BetslipDevelopItemInfo from '../TicketDevelop/BetslipDevelopItemInfo';
import TicketKeypad from 'src/components/TicketKeypad';

import Wrapper from './Wrapper';

interface State {
    showKeypad: boolean,
    showInfo: boolean,
}

class TicketDevelopItem extends React.Component<{}, State>{
    public state: State = { showKeypad: false, showInfo: false }
    public render() {
        const { showKeypad, showInfo } = this.state;
        return (
            <>
                <Wrapper>

                    <ItemWrapper>
                        <IconEye />
                        <TicketStake onImportClick={this.toggleKeypad} error={false} sistema={true} />

                        <NumberArrowWrapper>
                            <DevelopNumber>x1</DevelopNumber>
                            <ArrowDown onClick={this.toggleInfo} showInfo={showInfo} />
                        </NumberArrowWrapper>
                    </ItemWrapper>
                    {showInfo && <BetslipDevelopItemInfo />}
                </Wrapper>
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

const ItemWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #d5d5d5;
    background-color: #4a4a4a;
`;
const IconEye = styled.div`
    width: 17px;
    height: 17px;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_eye_2.png?v=2.6.8');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 20px;
`;
const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,.75);
    z-index: 8000;
`;


export default TicketDevelopItem;