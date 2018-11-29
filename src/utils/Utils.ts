import { find } from 'lodash';
import { WithId } from 'src/types/custom';

export default class Utils {

    static findById = (array: Array<WithId>, id: string) => {
        return find(array, (item: WithId) => item.id === id);
    };
}