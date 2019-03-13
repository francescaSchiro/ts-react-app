import * as React from 'react';

import Wrapper from './Wrapper';
import LabelValueWrapper from './LabelValueWrapper';
import Label from './Label';
import Value from './Value';
import ChangeArrowWrapper from './ChangeArrowWrapper';
import Change from './Change';
import Arrow from './Arrow';
import ClusterAccordion from './ClusterAccordion';
import ClusterAccordionItem from './ClusterAccordionItem';
import Span from './Span';

import clusterAccordionItems from './clusterAccordionItems';


interface IClusterChangeState {
    showCambia: boolean,
}
class ClusterChange extends React.Component<{}, IClusterChangeState>{
    public state = { showCambia: false };
    public render() {
        const { showCambia } = this.state;
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
                        {clusterAccordionItems.map(el => <ClusterAccordionItem key={el}><Span>{el}</Span></ClusterAccordionItem>)}
                    </ClusterAccordion>

                }
            </>

        )
    }

    private toggleCambia = () => {
        this.setState({ showCambia: !this.state.showCambia })
    }
}


export default ClusterChange;