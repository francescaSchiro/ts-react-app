import { BACKOFFICE_DATA } from 'src/maps/backoffice';
import { WithId } from 'src/types/custom';

export interface BackofficeServerInterface {
  titolo: string,
  ordinamento: string,
  posizione: string,
  visibilita: string,
  destinazione: string,
  immagine?: string,
  url?: string
};

export default class BackofficeBase implements WithId {
  public readonly id: string;
  private readonly order: string;
  private readonly position: string;
  private readonly visibility: string;
  private readonly target: string;

  constructor(data: BackofficeServerInterface) {
    const {
      titolo = '',
      ordinamento = '1',
      posizione = BACKOFFICE_DATA.POSITION.TOP,
      visibilita = BACKOFFICE_DATA.VISIBILITY.ALL,
      destinazione = BACKOFFICE_DATA.TARGET.ALL,
    } = data;
    this.id = titolo;
    this.order = ordinamento;
    this.position = posizione;
    this.visibility = visibilita;
    this.target = destinazione;
  }

  /**
   * Is a top banner?
   * @return {boolean}
   */
  public isTop(): boolean {
    const { TOP } = BACKOFFICE_DATA.POSITION;
    return this.position === TOP;
  }

  /**
   * Is a middle banner?
   * @return {boolean}
   */
  public isMiddle(): boolean {
    const { MIDDLE } = BACKOFFICE_DATA.POSITION;
    return this.position === MIDDLE;
  }

  /**
   * Is a bottom banner?
   * @return {boolean}
   */
  public isBottom(): boolean {
    const { BOTTOM } = BACKOFFICE_DATA.POSITION;
    return this.position === BOTTOM;
  }

  /**
   * Is visible to logged-in user?
   * @return {boolean}
   */
  public isForLoggedIn(): boolean {
    const { LOGGED_IN } = BACKOFFICE_DATA.VISIBILITY;
    return this.visibility.indexOf(LOGGED_IN) !== -1;
  }

  /**
   * Is visible to logged-out user?
   * @return {boolean}
   */
  public isForLoggedOut(): boolean {
    const { LOGGED_OUT } = BACKOFFICE_DATA.VISIBILITY;
    return this.visibility.indexOf(LOGGED_OUT) !== -1;
  }

  /**
   * Is visible for web?
   * @return {boolean}
   */
  public isWebTarget(): boolean {
    const { WEB } = BACKOFFICE_DATA.TARGET;
    return this.target.indexOf(WEB) !== -1;
  }

  /**
   * Is visible for app?
   * @return {boolean}
   */
  public isAppTarget(): boolean {
    const { APP } = BACKOFFICE_DATA.TARGET;
    return this.target.indexOf(APP) !== -1;
  }
}