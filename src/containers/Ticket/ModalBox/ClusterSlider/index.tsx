import * as React from 'react';

import Wrapper from './Wrapper';
import ClusterItem from './ClusterItem';

import clusterItems from './clusterItems';

const ClusterSlider = () => (
    <Wrapper>
        {clusterItems.map(el => <ClusterItem key={el}><span>{el}</span></ClusterItem>)}
    </Wrapper>
);

export default ClusterSlider;