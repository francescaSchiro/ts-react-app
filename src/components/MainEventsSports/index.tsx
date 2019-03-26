import * as React from 'react';
import styled from 'src/theme/default/index';

import { ISport } from 'src/models/ISport';

import Wrapper from './Wrapper';


interface Props {
    sports: ISport[],
    onSportClick: (sport: ISport) => void,
    currentSport: ISport,
};

class MainEventsSports extends React.Component<Props>{
    public render() {
        const { sports, currentSport, onSportClick } = this.props;
        return (
            <Wrapper>
                {sports.map((sport: ISport) => (
                    <MainEventsSportsItem key={sport.id} isActive={currentSport.name === sport.name} onClick={onSportClick.bind(this, sport)}>
                        {sport.name}
                    </MainEventsSportsItem>
                ))}
            </Wrapper>

        )
    }
};

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

export default MainEventsSports;
