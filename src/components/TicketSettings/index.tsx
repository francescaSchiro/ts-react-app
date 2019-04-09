import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';

interface ISettingsDefaultBlockState {
    showInfo: boolean,
    showChecklist: boolean,

}

class TicketSettings extends React.Component<{}, ISettingsDefaultBlockState> {
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

const Title = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: center;


    background-color: #393939;
    color: #eaeaea;
    font-weight: bold;
    font-size:10px;
    padding-left: 8px;

    &::after {
        position: absolute;
        content:'i';
        /* background-image: url('https://www.iconsdb.com/icons/preview/white/info-2-xxl.png'); */
        right: -25px;   
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;
        height: 12px;
        width: 12px;   
        border-radius: 50%;
        border:1px solid white;
    }
`;

interface IDownArrowProps {
    showChecklist: boolean,
};

const DownArrow = styled.div`
    height: 8px;
    width: 15px;
    background: ${ (props: IDownArrowProps) => props.showChecklist
        ? `url('https://m.sisal.it/scommesse-matchpoint/content/img/frecciaImpostazioniSu.png?v=2.6.8') no-repeat;`
        : `url('https://m.sisal.it/scommesse-matchpoint/content/img/frecciaImpostazioniGiu.png?v=2.6.8') no-repeat`};
    background-size: 14px;
    margin-right: 8px;
`;
const ImpostazioniExpand = styled.div`
    box-sizing: border-box;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #666;
    color: #eaeaea;
    font-size: 10px;
    line-height: 14px;
    padding: 5px 8px;
    white-space: pre-wrap;
`;

const NaturalSeparator = styled.div`
    background: #474747;
    height: 2px;
    width: 100%;
`;

const ChecklistWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #666;
`;

const ChecklistInput = styled.input`
    height: 20px;
	width: 20px;
    padding:0;
    margin:0;
`;

const Label = styled.label`
   color: #eaeaea;
   font-size: 12px;
   margin-left: 8px;
`;

const RowWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 8px;
    white-space: pre-wrap;
`;


export default TicketSettings;