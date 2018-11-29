import BackofficeBase, { BackofficeServerInterface } from './BackofficeBase';

export default class BannerNews extends BackofficeBase {
  public imageSrc: string;
  public url: string;

  constructor(data: BackofficeServerInterface) {
    const { 
      immagine = '',
      url = '' 
    } = data;
    super(data);
    this.imageSrc = immagine;
    this.url = url;
  }
}
