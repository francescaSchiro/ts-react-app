import * as React from 'react';
import styled from 'src/theme/default/index';

import BestEventsItem from 'src/components/BestEventsItem';
import { IBestEventsItem } from 'src/components/HomePage/bestEventsItems';

interface IBestEventsProps {
  bestEventsItems: IBestEventsItem[]
}

const BestEvents = (props: IBestEventsProps) => (
  <>
    <Title>Incontri principali</Title>
    <BestEventsSlider>
      {props.bestEventsItems.map(item =>
        <BestEventsItem
          key={item.gameName}
          bestEventsItem={item}
        />
      )}
    </BestEventsSlider>
  </>
);

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

export default BestEvents;

