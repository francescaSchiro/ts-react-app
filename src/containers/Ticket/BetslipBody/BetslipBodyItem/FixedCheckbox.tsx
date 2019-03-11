import styled from 'src/theme/default/index';

interface IFixedCheckbox {
    checked?: boolean,
}

const FixedCheckbox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height:16px;
    width: 16px;
    font-weight:bold;
    color: #fff;
    border: ${(props: IFixedCheckbox) => props.checked ? '2px solid #186cb5' : '2px solid #909090'};
    border-radius: 0 0 2px 2px ;
    opacity:1;

    ${(props: IFixedCheckbox) => props.checked ? `
    &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 40%;
    width: 6px;
    height: 10px;
    border-right: 2px solid #186cb5;
    border-bottom: 2px solid #186cb5;
    transform: translate(-50%,-50%) rotate(45deg) skew(11deg);
    }`: null
    }
`
export default FixedCheckbox;
