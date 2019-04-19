import { ISingoloSviluppoListItem } from 'src/models/ISingoloSviluppoListItem';

export interface ISviluppoSistemaExt {
    bonusApplicato: boolean,
    cardinalita: number,
    esito: number,
    importo: number,
    importoTotale: number,
    integrale: boolean,
    numeroSviluppi: number,
    quotaMassima: number,
    quotaMinima: number,
    singoloSviluppoList: ISingoloSviluppoListItem[],
    valido: boolean,
    vincita: number,
    vincitaMassima: number,
    vincitaMinima: number,
    vincitaTotale: number,
    vincitaTotaleSistemaIntegrale: number,
};