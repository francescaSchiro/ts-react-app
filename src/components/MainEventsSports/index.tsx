import * as React from 'react';
import styled from 'src/theme/default/index';

import Wrapper from './Wrapper';
import { ISport } from 'src/models/ISport';

interface Props {
    sports: ISport[],
    onSportClick: (e: any, sport: ISport) => void,
};
interface State {
    currentSport: ISport,
};

class MainEventsSports extends React.Component<Props, State>{
    public state = { currentSport: this.props.sports[0] };
    public render() {
        const { sports, onSportClick } = this.props;
        const { currentSport } = this.state;
        return (
            <Wrapper>
                {sports.map((sport: ISport) => (
                    <MainEventsSportsItem key={sport.id} isActive={currentSport === sport} onClick={onSportClick.bind(this, sport)}>
                        {sport.name}
                    </MainEventsSportsItem>
                ))}
            </Wrapper>

        )
    }
}

export default MainEventsSports;

interface IMainEventsSportsItemProps {
    isActive: boolean;
}

const MainEventsSportsItem = styled.div`
display: flex;
justify-content: center;
align-items: center;

background-color: ${(props: IMainEventsSportsItemProps) => (props.isActive ? '#f6a81e' : 'transparent')};
border-radius: 20px;
padding: 3px 15px;

color: black;
font-weight: bold;
text-transform: capitalize;
`;
