import styled from 'src/theme/default/index';

interface IFixed {
    checked?: boolean,
}

const Fixed = styled.div`
    margin-top:8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height:16px;
    width: 16px;
    font-weight:bold;
    color: #fff;
    background-color: ${(props: IFixed) => props.checked ? '#186cb5' : '#909090'};
    border-radius: 2px 2px 0 0;
`
export default Fixed;