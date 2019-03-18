import * as React from 'react';
import styled from 'src/theme/default/index';

import BestEventsItem from 'src/components/BestEventsItem';
import bestEventsItems from './bestEventsItems';


const Title = styled.div`
  width: 100%;
  padding: 15px 0 10px 0;
  display:flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  color: #777;
  font-weight: 700;
  white-space:normal;
`;

const BestEventsSlider = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  height: 80px;
  overflow-x: auto;
  ::-webkit-scrollbar { 
       display: none; 
    }
`;

const BestEvents = () => (
  <>
    <Title>Incontri principali</Title>
    <BestEventsSlider>
      {bestEventsItems.map(el =>
        <BestEventsItem
          key={el.gameName}
          iconUrl={el.iconUrl}
          leagueLabel={el.leagueLabel}
          gameLabels={el.gameLabels}
          day={el.day}
          time={el.time}
          gameName={el.gameName}
          oddValues={el.oddValues}
        />
      )}
    </BestEventsSlider>
  </>
);

export default BestEvents;

