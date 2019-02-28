import * as React from 'react';

import Wrapper from './Wrapper';
import LabelValueWrapper from './LabelValueWrapper';
import Label from './Label';
import Value from './Value';
import ChangeArrowWrapper from './ChangeArrowWrapper';
import Change from './Change';
import Arrow from './Arrow';


const ClusterChange = () => (
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
);

export default ClusterChange;