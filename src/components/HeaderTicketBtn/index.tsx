import * as React from 'react';
import styled from 'src/theme/default/index';


import Wrapper from './Wrapper';

interface IHeaderTicketBtn {
    betsCount: number | null | undefined | string,
};

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

const HeaderTicketBtn = (props: IHeaderTicketBtn) => (
    <Wrapper>
        {props.betsCount
            ? <Div> {props.betsCount} </Div>
            : null
        }
    </Wrapper>
);

export default HeaderTicketBtn;
