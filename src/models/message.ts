export default class Message {

    id: string;
    label: string;

    constructor(item: any) {
        this.id = item.id;
        this.label = item.label;
    }

    public upper() {
        return this.label.toUpperCase();
    }
}