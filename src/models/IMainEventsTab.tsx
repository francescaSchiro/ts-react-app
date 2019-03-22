import { ISport } from 'src/models/ISport';

export interface IMainEventsTab {
    name: string,
    isActive: boolean,
    currentSport: ISport,
    sports: ISport[],
};

