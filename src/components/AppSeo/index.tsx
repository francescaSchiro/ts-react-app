import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const TitleWrapper = styled.div`
  width: auto;
  min-height: 20px; 
  padding: 0 0 12px 0;
  text-align: center;
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  white-space:normal;
`;

const MixedTextWrapper = styled.div`
  display: block;
  white-space: normal;
  text-align: left;
  line-height: 1.3;
`;

interface IPLeftBannerProps {
  fontWeight?: number,
}
const PLeftBanner = styled.p`
  color: inherit;
  white-space:normal;
  font-size: 1em;
  display: inline;
  text-align: left;
  font-size: 11px;
  ${(props: IPLeftBannerProps) => `font-weight: ${props.fontWeight};`}
`;

const AppSeo = () => (
  <Wrapper>
    <TitleWrapper>
      <Title> Prova il divertimento delle scommesse mobile di Sisal Matchpoint!</Title>
    </TitleWrapper>
    <MixedTextWrapper>
      <PLeftBanner> Consulta il palinsesto degli eventi di giornata e</PLeftBanner>
      <PLeftBanner fontWeight={700}> piazza la tua scommessa</PLeftBanner>
      <PLeftBanner> direttamente da smartphone e tablet in pochi click!</PLeftBanner>
      <br />
      <PLeftBanner>Scegli di giocare su calcio, basket, tennis e tanti altri sport: l’offerta delle scommesse di Sisal.it è davvero ricca!</PLeftBanner>
      <br />
      <PLeftBanner>Puoi seguire i risultati degli incontri e</PLeftBanner>
      <PLeftBanner fontWeight={700}> scommettere live </PLeftBanner>
      <PLeftBanner>con le quote aggiornate o decidere di proporre una giocata che non trovi in palinsesto grazie alle</PLeftBanner>
      <PLeftBanner fontWeight={700}> scommesse on demand.</PLeftBanner>
      <br />
      <PLeftBanner>Per accedere all’offerta delle scommesse di</PLeftBanner>
      <PLeftBanner fontWeight={700}> Sisal Matchpoint</PLeftBanner>
      <PLeftBanner> devi essere titolare di un conto di gioco personale: registrati al portale di gioco Sisal.it ed approfitta del welcome bonus per tentare i tuoi pronostici!</PLeftBanner>
    </MixedTextWrapper>
  </Wrapper>
);

export default AppSeo;