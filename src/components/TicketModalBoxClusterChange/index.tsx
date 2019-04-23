import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


interface State {
    showCambia: boolean,
};
interface Props {
    clusterAccordionItems: any[],
};

interface IClasseDiEsitoItem {
    descrizione: string,
    idClasseEsito: string,
};

class TicketModalBoxClusterChange extends React.Component<Props, State>{
    public state: State = { showCambia: false };
    public render() {
        const { showCambia } = this.state;
        const { clusterAccordionItems } = this.props;
        return (
            <>
                <Wrapper>
                    <LabelValueWrapper>
                        <Label>Tipo scommessa:</Label>
                        <Value>ESITO Finale 1x2</Value>
                    </LabelValueWrapper>
                    <ChangeArrowWrapper>
                        <Change onClick={this.toggleCambia}>Cambia</Change>
                        <Arrow showCambia={showCambia} />
                    </ChangeArrowWrapper>
                </Wrapper>
                {showCambia &&
                    <ClusterAccordion>
                        {clusterAccordionItems[0].classeDiEsitoList.map((el: IClasseDiEsitoItem) => (
                            <ClusterAccordionItem key={el.idClasseEsito}><Span>{el.descrizione}</Span></ClusterAccordionItem>
                        )
                        )}
                    </ClusterAccordion>
                }
            </>
        )
    };
    private toggleCambia = () => {
        this.setState({ showCambia: !this.state.showCambia })
    }
};

const LabelValueWrapper = styled.div`
    height: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const Label = styled.div`
    font-weight: normal;
    color: #4a4a4a;
    margin-right: 3px;
`;
const Value = styled.div`
    font-weight: bold;
    text-transform: uppercase;
`;
const ChangeArrowWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const Change = styled.div`
    height:35px;
    display: flex;
    justify-content:center;
    align-items: center;
    position:relative;
    font-size:12px;
    font-weight: bold;
    color: #393939;   
`;
interface IArrowProps {
    showCambia: boolean,
};
const ClusterAccordion = styled.div`
    width:100%;
    max-height: 165px;
    overflow-y: auto;
    padding: 5px;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    margin-bottom: 8px;
`;
const ClusterAccordionItem = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items: center;
    width: 50%;
    height: 35px;
    padding: 0 10px;
    &:first-child > span{
        position:relative;
        font-weight: bold;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            left: 50%;
            bottom: -5px;
            background: #b9d531;
            transform: translate(-50%,0);
        }
    }
`;
const Span = styled.span`
    font-size: 12px;
    font-weight: normal;
    color: #333;
`;
const Arrow = styled.div`
    width: 7px;
    height: 7px;
    margin-top: 3px;
    margin-left: 10px;
    border-right: 2px solid #4a4a4a;
    border-bottom: 2px solid #4a4a4a;
    transform: ${(props: IArrowProps) => (
        props.showCambia
            ? `translate(-50%,0) rotate(-135deg);` // upArrow
            : `translate(-50%,-40%) rotate(45deg);` // downArrow
    )
    }`

export default TicketModalBoxClusterChange;