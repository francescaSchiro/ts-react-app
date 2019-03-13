
import styled from 'src/theme/default/index';

interface IDownArrow {
    showChecklist: boolean,
}

const DownArrow = styled.div`
    height: 8px;
    width: 15px;
    background: ${ (props: IDownArrow) => props.showChecklist
        ? `url('https://m.sisal.it/scommesse-matchpoint/content/img/frecciaImpostazioniSu.png?v=2.6.8') no-repeat;`
        : `url('https://m.sisal.it/scommesse-matchpoint/content/img/frecciaImpostazioniGiu.png?v=2.6.8') no-repeat`};
    background-size: 14px;
    margin-right: 8px;
   
`
export default DownArrow;