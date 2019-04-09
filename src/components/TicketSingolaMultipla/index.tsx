import * as React from 'react';
import styled from 'src/theme/default/index';

import { ITicketBodyContent } from 'src/models/ITicketBodyContent';
import TicketBody from 'src/components/TicketBody';
import TicketSettings from 'src/components/TicketSettings';
import TicketFooter from 'src/components/TicketFooter';
import TicketButtons from 'src/components/TicketButtons';

import Wrapper from './Wrapper';


interface State {
    showKeypad: boolean,
};

interface Props {
    content: ITicketBodyContent,
};

class TicketSingolaMultipla extends React.Component<Props, State> {
    public state: State = { showKeypad: false }

    public render() {
        const { showKeypad } = this.state;
        const { content } = this.props;
        return (
            <Wrapper>
                <TicketBody content={content} />
                <InfoAlert error={true}>
                    <InfoIcon />
                    La puntata minima è di € 2,00
                </InfoAlert>
                <TicketSettings />
                <TicketFooter
                    onImportClick={this.toggleKeypad}
                    showKeypad={showKeypad}
                />
                <TicketButtons />
            </Wrapper>
        )
    }
    private toggleKeypad = () => {
        this.setState({ showKeypad: !this.state.showKeypad })
    }
};


interface IInfoAlertProps {
    error?: boolean;
}

const InfoAlert = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    background-color: ${(props: IInfoAlertProps) => props.error ? '#D82600' : '#f7a81e'};
    color: #fff;
    padding: 6px 12px;
    font-size: 11px;
`;

const InfoIcon = styled.div`
    height: 15px;
    width:15px;
    opacity: .7;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/ic_info.png?v=2.6.8');
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 6px 0 0;

`;

export default TicketSingolaMultipla;