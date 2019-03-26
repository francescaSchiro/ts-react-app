import * as React from 'react';
import styled from 'src/theme/default/index';

import { IBannerBase } from 'src/models/IBannerBase';

import Wrapper from './Wrapper';


interface Props {
    bannerBase: IBannerBase,
}

const BannersBase: React.FC<Props> = ({ bannerBase }) => {
    const { imgUrl, url } = bannerBase;
    return (
        <Wrapper>
            <a href={url} style={{ all: 'unset' }}>
                <BannersBaseImg imgUrl={imgUrl} />
            </a>
        </Wrapper>
    )
};

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

export default BannersBase;
