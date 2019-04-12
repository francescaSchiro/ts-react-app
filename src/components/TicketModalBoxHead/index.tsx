import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


interface Props {
    onChiudiClick: () => void,
    descrizioneAvvenimento: string,
};

const TicketModalBoxHead: React.FC<Props> = ({ onChiudiClick, descrizioneAvvenimento }) => (
    <Wrapper>
        <Title> {descrizioneAvvenimento} </Title>
        <Close onClick={onChiudiClick} > Chiudi </Close>
    </Wrapper>
);

const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

const Close = styled.div`
    font-size: 12px;
    font-weight: normal;
    padding:8px;
`;

export default TicketModalBoxHead;