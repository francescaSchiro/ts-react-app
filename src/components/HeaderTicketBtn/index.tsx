import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


interface OwnProps {
    betsCount: number,
};

const HeaderTicketBtn: React.FC<OwnProps> = ({ betsCount }) => (
    <Wrapper>
        {betsCount
            ? <Div> {betsCount} </Div>
            : null
        }
    </Wrapper>
);

const Div = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:6px;
    right:6px;
    width: 17px;
    height: 17px;
    border-radius: 9px;
    background-color: #f7a81e;
    font-weight: bold;
    font-size: 9px;

`;

export default HeaderTicketBtn;
