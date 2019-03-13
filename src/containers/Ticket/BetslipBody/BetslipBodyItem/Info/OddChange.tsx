import styled from 'src/theme/default/index';

const getFontColor = (change: string) => {
    switch (change) {
        case 'closed':
            return '#909090';
        case 'negative':
            return '#dc1a11';
        case 'positive':
            return '#3B914C';
        default:
            return '#393939';
    }
};

const getChangeStyle = (change: string) => {
    switch (change) {
        case 'negative':
            return `
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: -10px;
                    border-left: 4px solid transparent;
                    border-right: 4px solid transparent;
                    border-bottom: 4px solid #dc1a11;
                    transform: rotate(225deg);
            }
            `;
        case 'positive':
            return `
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
            `
        default:
            return '';
    }
};

interface IOddChange {
    change?: string,
    // change?: -10 | -1 | 0 | 1 | 10,

}

const OddChange = styled.span`
    /* display:flex;
    justify-content: flex-start;
    align-items: center; */
    position: relative;
    /* display: inline-block; */
    color: ${(props: IOddChange) => props.change ? getFontColor(props.change) : '#393939'};
    margin-left: 11px;
    
    ${(props: IOddChange) => props.change ? getChangeStyle(props.change) : null};  

`
export default OddChange;