interface IStatoMap {
    [key: string]: number,
}
export interface ISingoloSviluppoListItem {
    bonusApplicato: boolean,
    giocabile: boolean,
    importo: number,
    importoVincita: number,
    quotaTotale: number,
    stato: number,
    statoMap: IStatoMap,
    statoSviluppo: number,
};
