import * as React from 'react';

import AppSeoWrapper from './Wrapper';
import MixedTextWrapper from '../MixedTextWrapper';
import Title from '../Title';
import PLeftBanner from '../PLeftBanner';
import TitleWrapper from '../TitleWrapper';




const AppSeo = () => (
    <AppSeoWrapper>
      <TitleWrapper padding={'0 0 12px 0'}>
        <Title fontSize={'13px'} textAlign={'left'}> Prova il divertimento delle scommesse mobile di Sisal Matchpoint!</Title>
      </TitleWrapper>
      <MixedTextWrapper lineHeight={1.3}>
          <PLeftBanner fontSize={'11px'}> Consulta il palinsesto degli eventi di giornata e</PLeftBanner>
          <PLeftBanner fontSize={'11px'} fontWeight={700}> piazza la tua scommessa</PLeftBanner>
          <PLeftBanner fontSize={'11px'}> direttamente da smartphone e tablet in pochi click!</PLeftBanner>
          <br/>
          <PLeftBanner fontSize={'11px'}>Scegli di giocare su calcio, basket, tennis e tanti altri sport: l’offerta delle scommesse di Sisal.it è davvero ricca!</PLeftBanner>
          <br/>
          <PLeftBanner fontSize={'11px'}>Puoi seguire i risultati degli incontri e</PLeftBanner>
          <PLeftBanner fontSize={'11px'} fontWeight={700}> scommettere live </PLeftBanner>
          <PLeftBanner fontSize={'11px'}>con le quote aggiornate o decidere di proporre una giocata che non trovi in palinsesto grazie alle</PLeftBanner>
          <PLeftBanner fontSize={'11px'} fontWeight={700}> scommesse on demand.</PLeftBanner>
          <br/>
          <PLeftBanner fontSize={'11px'}>Per accedere all’offerta delle scommesse di</PLeftBanner>
          <PLeftBanner fontSize={'11px'} fontWeight={700}> Sisal Matchpoint</PLeftBanner>
          <PLeftBanner fontSize={'11px'}> devi essere titolare di un conto di gioco personale: registratial portale di gioco Sisal.it ed approfitta del welcome bonus per tentare i tuoi pronostici!</PLeftBanner>
      </MixedTextWrapper>      
    </AppSeoWrapper>
);

export default AppSeo;