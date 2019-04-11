import * as React from 'react';
import styled from 'src/theme/default/index';

import { IPronosticoItem } from 'src/models/IPronosticoItem';

import Wrapper from './Wrapper';
import TicketInfo from 'src/components/TicketInfo';

import ModalBox from 'src/containers/Ticket/ModalBox';


export interface State {
    isChecked: boolean,
    showModalBox: boolean,

}
export interface Props {
    sistema: boolean,
    item: IPronosticoItem,
};

class TicketBodyItem extends React.Component<Props, State>{
    public state: State = { isChecked: false, showModalBox: false }
    public render() {
        const { item, sistema } = this.props;
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
                            <InfoTimezone>{item.avvenimentoKey} | {item.formattedDataAvvenimento}</InfoTimezone>
                            <Title>{item.descrizioneAvvenimento}</Title>
                            <TicketInfo
                                descrizioneScommessa={item.descrizioneScommessa}
                                quotaVariata={item.quotaVariata}
                                quota={item.quota}
                            />
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
    };

    private toggleFixed = (e: any) => {
        this.setState({ isChecked: !this.state.isChecked })
    }
    private toggleModalBox = () => {
        this.setState({ showModalBox: !this.state.showModalBox })
    }
};

const BetData = styled.div`
    height: 100%;
    flex-grow:1;

    display: flex;
    flex-direction:row;
    flex-wrap: flex-start;
`;

const BetExtra = styled.div`
    width: 44px;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
`;

const BetActions = styled.div`
    width: 44px;
    padding:8x;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
`;

const BetDetail = styled.div`
    display: flex;
    flex-grow:1;
    flex-direction:column;
    justify-content: flex-start;
`;

const InfoTimezone = styled.div`
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    color: #909090;
    font-size: 11px;
    padding: 8px 0;
`;

const Title = styled.div`
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    color: #393939;
    font-size: 13px;
    font-weight: bold;
    padding-bottom: 10px;
`;

interface IDeleteIconProps {
    display?: boolean;
}

const DeleteIcon = styled.div`
    display: ${(props: IDeleteIconProps) => props.display ? 'block' : 'none'};
    width:12px;
    height:14px;
    margin-right: 8px;
    background-size: 12px;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_delete.png?v=2.6.8');
    background-repeat: no-repeat;
    background-position: center;
`;

const EditIcon = styled.div`
    width:18px;
    height:18px;
    margin-right: 8px;
    background-size: 18px;
    background-image: url('https://image.flaticon.com/icons/svg/152/152529.svg');
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(90deg);
    opacity: .3;
`;

interface IFixedProps {
    checked?: boolean,
}

const Fixed = styled.div`
    margin-top:8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height:16px;
    width: 16px;
    font-weight:bold;
    color: #fff;
    background-color: ${(props: IFixedProps) => props.checked ? '#186cb5' : '#909090'};
    border-radius: 2px 2px 0 0;
`;


interface IFixedCheckboxProps {
    checked?: boolean,
}

const FixedCheckbox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height:16px;
    width: 16px;
    font-weight:bold;
    color: #fff;
    border: ${(props: IFixedCheckboxProps) => props.checked ? '2px solid #186cb5' : '2px solid #909090'};
    border-radius: 0 0 2px 2px ;
    opacity:1;
    ${(props: IFixedCheckboxProps) => props.checked ? `
    &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 40%;
    width: 6px;
    height: 10px;
    border-right: 2px solid #186cb5;
    border-bottom: 2px solid #186cb5;
    transform: translate(-50%,-50%) rotate(45deg) skew(11deg);
    }`: null
    }
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,.75);
    z-index: 8000;
`;

export default TicketBodyItem;