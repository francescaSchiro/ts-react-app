import { IEvent } from 'src/models/IEvent';

export interface ILeague {
    id: number;
    name: string,
    iconUrl: string,
    events: IEvent[],
}