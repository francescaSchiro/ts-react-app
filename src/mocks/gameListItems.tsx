import { IGameListItem } from 'src/models/IGameListItem';

const gameListItems: IGameListItem[] = [
    {
        selected: true,
        label: '1',
        quota: 200
    },
    {
        selected: false,
        label: 'X',
        quota: 350
    },
    {
        selected: true,
        label: '2',
        quota: 320
    },
];

export default gameListItems;