import { ILeague } from 'src/models/ILeague';


export interface ISport {
    id: number,
    name: string,
    leagues: ILeague[],
}