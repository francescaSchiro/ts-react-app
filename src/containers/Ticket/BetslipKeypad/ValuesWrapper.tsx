import styled from 'src/theme/default/index';

interface IValuesWrapper {
    width: number,
}

const ValuesWrapper = styled.div`
    width: ${(props: IValuesWrapper) => `${props.width}%`};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export default ValuesWrapper;