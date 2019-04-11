import * as React from 'react';

import { IPronosticoItem } from 'src/models/IPronosticoItem';
import TicketBodyItem from 'src/components/TicketBodyItem';


export interface Props {
    sistema: boolean,
    pronosticoList: IPronosticoItem[],
};

const TicketBodyItems: React.FC<Props> = ({ sistema, pronosticoList }) => (
    <>
        {pronosticoList.map(item => (
            <TicketBodyItem item={item} sistema={sistema} />
        ))}
    </>
);

export default TicketBodyItems;