import { IPronosticoItem } from 'src/models/IPronosticoItem';
import { ISviluppoSistemaExt } from 'src/models/ISviluppoSistemaExt';

export interface ITicketDettaglioSistema {
    pronosticoList: IPronosticoItem[],
    sviluppoSistemaExt: ISviluppoSistemaExt,
};