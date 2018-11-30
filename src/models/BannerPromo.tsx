import BackofficeBase, { BackofficeServerInterface } from './BackofficeBase';

export default class BannerPromo extends BackofficeBase {
  public readonly text: string;
  public readonly title: string;
  public readonly title2: string;
  public readonly imageSrc: string;
  public readonly url: string;

  constructor(data: BackofficeServerInterface) {
    const {
      testo = '',
      titolo1 = '',
      titolo2 = '',
      url = '',
      immagine = '',
    } = data;
    super(data);
    this.text = testo;
    this.title = titolo1;
    this.title2 = titolo2;
    this.url = url;
    this.imageSrc = immagine;
  }
}
