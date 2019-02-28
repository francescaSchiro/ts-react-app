import * as React from 'react';

import GameWrapper from './GameWrapper';
import DeleteIcon from '../../DeleteIcon';
import GameLabel from './GameLabel';
import GameLabelDark from './GameLabelDark';

const Game = () => (
    <GameWrapper>
        <DeleteIcon display={true} />
        <GameLabel>Esito finale 1x2:</GameLabel>
        <GameLabelDark>1 (1.74)</GameLabelDark>
    </GameWrapper>
);

export default Game;