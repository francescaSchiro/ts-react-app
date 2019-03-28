import { ITicketEmptyContentCategory } from 'src/models/ITicketEmptyContentCategory';

export interface ITicketEmptyContent {
    message: string,
    categories: ITicketEmptyContentCategory[],
};
