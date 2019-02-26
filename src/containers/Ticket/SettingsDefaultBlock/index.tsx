import * as React from 'react';

import Wrapper from './Wrapper';
import Title from './Title';
import DownArrow from './DownArrow';
import ImpostazioniExpand from './ImpostazioniExpand';
import NaturalSeparator from './NaturalSeparator';
import ChecklistWrapper from './ChecklistWrapper';
import ChecklistInput from './ChecklistInput';
import Label from './Label';
import RowWrapper from './RowWrapper';


const SettingsDefaultBlock = () => (
    <>
        <Wrapper>
            <Title>Impostazioni di scommessa</Title>
            <DownArrow />
        </Wrapper>
        <NaturalSeparator />
        <ImpostazioniExpand>
            Questa funzionalità ti permette di concludere la scommessa live in modo veloce anche se le quote si aggiornano in modo non rilevante.
               Scegli se accettare qualsiasi variazione non rilevante delle quote oppure solo quella in crescita.
        </ImpostazioniExpand>
        <NaturalSeparator />
        <ChecklistWrapper>
            <RowWrapper>
                <ChecklistInput type='radio' name='settings' value='alte' id='alte' checked={true} />
                <Label htmlFor='alte'>Accetto variazioni di quote più alte</Label>
            </RowWrapper>
            <RowWrapper>
                <ChecklistInput type='radio' name='settings' value='tutte' id='tutte' />
                <Label htmlFor='tutte'>Accetto tutte le variazioni di quote</Label>
            </RowWrapper>
        </ChecklistWrapper>

    </>
);

export default SettingsDefaultBlock;