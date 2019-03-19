import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';

interface IBannersBaseImgProps {
    imgUrl: string,
}

const BannersBaseImg = styled.div`
    background-image: url(${(props: IBannersBaseImgProps) => props.imgUrl});
    width: 100%;
    height: 80px;
    border-radius: 2px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    -moz-box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
`;

interface IBannersBaseProps {
    imgUrl: string,
}

const BannersBase = (props: IBannersBaseProps) => (
    <Wrapper>
        <BannersBaseImg imgUrl={props.imgUrl} />
    </Wrapper>
);

export default BannersBase;
