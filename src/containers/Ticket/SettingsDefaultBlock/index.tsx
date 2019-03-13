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

interface ISettingsDefaultBlockState {
    showInfo: boolean,
    showChecklist: boolean,

}

class SettingsDefaultBlock extends React.Component<{}, ISettingsDefaultBlockState> {
    public state = { showInfo: false, showChecklist: false };
    public render() {
        const { showInfo, showChecklist } = this.state;
        return (
            <>
                <Wrapper>
                    <Title onClick={this.toggleInfo}>Impostazioni di scommessa</Title>
                    <DownArrow onClick={this.toggleChecklist} showChecklist={showChecklist} />
                </Wrapper>
                <NaturalSeparator />
                {showInfo &&
                    <>
                        <ImpostazioniExpand>
                            Questa funzionalità ti permette di concludere la scommessa live in modo veloce anche se le quote si aggiornano in modo non rilevante.
                            Scegli se accettare qualsiasi variazione non rilevante delle quote oppure solo quella in crescita.
                        </ImpostazioniExpand>
                        <NaturalSeparator />
                    </>
                }
                {showChecklist &&

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

                }

            </>
        )
    }
    private toggleInfo = () => {
        this.state.showChecklist
            ? this.setState({ showInfo: !this.state.showInfo })
            : this.setState({ showInfo: !this.state.showInfo, showChecklist: !this.state.showChecklist })
    }
    private toggleChecklist = () => {
        this.state.showInfo
            ? this.setState({ showChecklist: !this.state.showChecklist, showInfo: !this.state.showInfo })
            : this.setState({ showChecklist: !this.state.showChecklist })
    }

};

export default SettingsDefaultBlock;