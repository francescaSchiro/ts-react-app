import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


interface Props {
    onChiudiClick: () => void,
};

class TicketDettaglioSistema extends React.Component<Props, {}> {

    public render() {
        const { onChiudiClick } = this.props;
        return (
            <Wrapper id='dettaglioSistema'>

                <Portrait>
                    <Close onClick={onChiudiClick}> chiudi</Close>
                    <Icon />
                    <Label>Ruota il tuo dispositivo</Label>
                    <Label>per visualizzare lo sviluppo del sistema</Label>
                </Portrait>

                <Landscape>
                    <DettaglioHeader>
                        Dettaglio sistema
                        <BackArrow onClick={onChiudiClick} />
                    </DettaglioHeader>
                </Landscape>

            </Wrapper >
        );

    }
};

const DettaglioHeader = styled.div`
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    background: #0095d6;
    width: 100%;
    color: #fff;
    font-size: 14px;
`;
const BackArrow = styled.div`
    position:absolute;
    left: 3%;
    border: solid white;
    border-width: 0 2px 2px 0;
    padding: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;

const Close = styled.div`
    width: 100%;
    padding: 16px;
    text-align: right;
    color: white;
    font-size: 14px;
`;

const Portrait = styled.div`
    height: 100%;
    width: 100%;
    display: block;
   @media screen and (orientation:landscape) { 
       display: none;
   };
`;

const Landscape = styled.div`
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    color: #393939;
    overflow-y: hidden;

   @media screen and (orientation:landscape) { 
       display: flex;
   };
`;
const Icon = styled.div`

    height: 30%;
    background: url('https://m.sisal.it/scommesse-matchpoint/content/img/rotate.png?v=2.7.5.3') center center no-repeat;
    background-size: 30%;
    margin-top: 40%;
`;
const Label = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 17px;
    padding-bottom: 7px;
    padding-left: 12px;
`;

export default TicketDettaglioSistema;