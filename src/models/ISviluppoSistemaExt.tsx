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
    vincita: 0,
    vincitaMassima: 1172,
    vincitaMinima: 138,
    vincitaTotale: 1172,
    vincitaTotaleSistemaIntegrale: 1172,
};