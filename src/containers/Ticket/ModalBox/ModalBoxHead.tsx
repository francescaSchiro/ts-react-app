import * as React from 'react';
import styled from 'src/theme/default/index';


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    color: #fff;
    background-color: #393939;
`
const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
`
const Close = styled.div`
    font-size: 12px;
    font-weight: normal;
    padding:8px;
`

const ModalBoxHead = () => (
    <Wrapper>
        <Title> Valencia - Real Betis </Title>
        <Close> Chiudi </Close>
    </Wrapper>
);

export default ModalBoxHead;