import styled from 'src/theme/default/index';

interface IGameOutcomes {
    selected?: boolean,
};

const GameOutcomes = styled.div`
    height: 40px;    
    flex-grow:1;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-radius: 2px;
    background-color: ${(props: IGameOutcomes) => props.selected ? '#f7a81e' : '#eaeaea'};
    box-shadow: inset 0 -1px rgba(0,0,0,.05);
    padding: 4px;
    margin: 0 1%;
`

export default GameOutcomes;