import { find } from 'lodash';

interface WithId extends Object {
    id: string | number;
}

export default class Utils {

    static findById = (array: Array<WithId>, id: string) => {
        return find(array, (item: WithId) => item.id === id);
    };
}