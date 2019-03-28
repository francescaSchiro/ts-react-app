import { IPronosticoItem } from 'src/models/IPronosticoItem';

export interface ITicketBodyContent {
    sistema: boolean,
    pronosticoList: IPronosticoItem[],
};
