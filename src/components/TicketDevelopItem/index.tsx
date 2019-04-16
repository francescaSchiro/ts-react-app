import * as React from 'react';
import styled from 'src/theme/default/index';

import TicketStake from 'src/components/TicketStake';
import TicketDevelopItemInfo from 'src/components/TicketDevelopItemInfo';
import TicketKeypad from 'src/components/TicketKeypad';

import Wrapper from './Wrapper';


interface State {
    showKeypad: boolean,
    showInfo: boolean,
};

class TicketDevelopItem extends React.Component<{}, State>{
    public state: State = { showKeypad: false, showInfo: false }
    public render() {
        const { showKeypad, showInfo } = this.state;
        return (
            <>
                <Wrapper>
                    <ItemWrapper>
                        <IconEye />
                        <TicketStake
                            onImportClick={this.toggleKeypad}
                            error={false}
                            sistema={true}
                        />
                        <NumberArrowWrapper>
                            <DevelopNumber>x1</DevelopNumber>
                            <ArrowDown
                                onClick={this.toggleInfo}
                                showInfo={showInfo}
                            />
                        </NumberArrowWrapper>
                    </ItemWrapper>
                    {showInfo && <TicketDevelopItemInfo />}
                </Wrapper>
                {showKeypad &&
                    <>
                        <Overlay />
                        <TicketKeypad 
                            onConfermaClick={this.toggleKeypad} 
                            sistema={true} 
                        />
                    </>
                }
            </>
        )
    }
    private toggleKeypad = () => {
        this.setState({ showKeypad: !this.state.showKeypad })
    };
    private toggleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo })
    };
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
const NumberArrowWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;
interface IArrowDown {
    showInfo: boolean;
};
const ArrowDown = styled.div`
    width: 10.2px;
    height: 24px;
    background-image:  url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_pv_chevron.png?v=2.6.8');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${(props: IArrowDown) => props.showInfo ? null : 'rotate(180deg)'};
`;
const DevelopNumber = styled.div`
    box-sizing:border-box;
    display:flex;
    justify-content:flex-end;
    align-items: center;
    color: #fff;
    letter-spacing: 3px;
    font-weight: bold;
    margin-right: 12px;
`;





export default TicketDevelopItem;