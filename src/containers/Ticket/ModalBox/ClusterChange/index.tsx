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


const ClusterChange = () => (
    <>
        <Wrapper>
            <LabelValueWrapper>
                <Label>Tipo scommessa:</Label>
                <Value>ESITO Finale 1x2</Value>
            </LabelValueWrapper>
            <ChangeArrowWrapper>
                <Change>Cambia</Change>
                <Arrow />
            </ChangeArrowWrapper>
        </Wrapper>

        <ClusterAccordion>
            {clusterAccordionItems.map(el => <ClusterAccordionItem key={el}><Span>{el}</Span></ClusterAccordionItem>)}
        </ClusterAccordion>
    </>
);

export default ClusterChange;