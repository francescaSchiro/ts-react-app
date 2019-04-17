import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';


const getQuota = (quota: number) => {
    const dividedQuota = quota / 100;
    return dividedQuota;
};

interface Props {
    descrizioneScommessa: string,
    quotaVariata: boolean,
    quota: number,
};

const TicketInfo: React.FC<Props> = ({ descrizioneScommessa, quotaVariata, quota }) => {
    return (
        <Wrapper>
            <Game>
                <DeleteIcon show={true} />
                {descrizioneScommessa}
                <Odd>
                    2 (-)
                        <OddChange change={quotaVariata}>({getQuota(quota)})</OddChange>
                </Odd>
            </Game>
            <MicroGame>Esito chiuso o sospeso</MicroGame>
        </Wrapper>
    )
};

const Game = styled.div`
    width: 100%;
    padding: 4px 0;
    display: inline-flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    color: #909090;
    font-size: 12px;
`;

const MicroGame = styled.div`
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    color: #909090;
    font-size: 11px;
    font-style: italic;
    color: #393939;
    padding: 2px 10px;
    margin-top: 5px;
    background-color: #eaeaea;
`;

const Odd = styled.span`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    color: #909090;
    font-size: 12px;
    font-weight: bold;
    white-space: pre-wrap;
    margin-left: 3px;
`;
interface IOddChangeProps {
    change: boolean,
};

const OddChange = styled.span`
    position: relative;
    color: ${(props: IOddChangeProps) => props.change ? '#3B914C' : '#393939'};
    margin-left: 11px;
    ${ (props: IOddChangeProps) => props.change ? `
                &::after {
                    content: '';
                    position: absolute;
                    top: 2px;
                    right: -11px;
                    border-left: 4px solid transparent;
                    border-right: 4px solid transparent;
                    border-bottom: 4px solid #3B914C;
                    transform: rotate(45deg);
                }
                ` : null};
`;

interface IDeleteIconProps {
    show?: boolean;
};

const DeleteIcon = styled.div`
    display: ${ (props: IDeleteIconProps) => props.show ? 'block' : 'none'};
    width: 12px;
    height: 14px;
    margin-right: 8px;
    background-size: 12px;
    background-image: url('https://m.sisal.it/scommesse-matchpoint/content/img/icon_delete.png?v=2.6.8');
    background-repeat: no - repeat;
    background-position: center;
`;


export default TicketInfo;

/* incoming newOddValue + oddState @ checkOddState time interval: =>
setState({
    oldOddValue= this.state.currentOddValue,
    currentOddValue = newOddValue (incoming one)
})
oddState: number {
    -10: negative,
    0: closed,
    1: same,
    10: positive
}
currentOddValue: number
oldOddValue: number // to print both in content string: `Quota cambiata da ${ oldOddValue } a ${ newOddValue } `
*/
// const getFontColor = (change: string) => {
//     switch (change) {
//         case 'closed':
//             return '#909090';
//         case 'negative':
//             return '#dc1a11';
//         case 'positive':
//             return '#3B914C';
//         default:
//             return '#393939';
//     }
// };

// const getChangeStyle = (change: string) => {
//     switch (change) {
//         case 'negative':
//             return `
//                 &::before{
//                     content: '';
//                     position: absolute;
//                     bottom: 0;
//                     left: -10px;
//                     border-left: 4px solid transparent;
//                     border-right: 4px solid transparent;
//                     border-bottom: 4px solid #dc1a11;
//                     transform: rotate(225deg);
//             }
//             `;
//         case 'positive':
//             return `
//                 &::after {
//                     content: '';
//                     position: absolute;
//                     top: 2px;
//                     right: -11px;
//                     border-left: 4px solid transparent;
//                     border-right: 4px solid transparent;
//                     border-bottom: 4px solid #3B914C;
//                     transform: rotate(45deg);
//                 }
//             `
//         default:
//             return '';
//     }
// };