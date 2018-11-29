import BackofficeBase, { BackofficeServerInterface } from "./BackofficeBase";

export default class BannerShowcase extends BackofficeBase {
    public readonly text: string;
    public readonly url: string;
    public readonly imageSrc: string;

    constructor(data: BackofficeServerInterface) {
        const {
            testo = "",
            url = "",
            immagine = ""
        } = data;
        super(data);
        this.text = testo;
        this.url = url;
        this.imageSrc = immagine;
    }
}