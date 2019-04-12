import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';

interface Props {
    error?: boolean,
    message: string,
    infoIconUrl: string,
};

const TicketInfoAlert: React.FC<Props> = ({ error, message, infoIconUrl }) => (
    <Wrapper error={error}>
        <InfoIcon url={infoIconUrl} />
        {message}
    </Wrapper>
);

interface IInfoIconProps {
    url: string,
};

const InfoIcon = styled.div`
    height: 15px;
    width:15px;
    opacity: .7;
    background-image: url(${(props: IInfoIconProps) => props.url});
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 6px 0 0;
`;

export default TicketInfoAlert;