import * as React from 'react';
import styled from 'src/theme/default/index';

import BestEventsItem from 'src/components/BestEventsItem';
import { IEvent } from 'src/models/IEvent';

interface Props {
  events: IEvent[]
}

const BestEvents: React.FC<Props> = ({ events }) => (
  <>
    <Title>Incontri principali</Title>
    <BestEventsSlider>
      {events.map((item: IEvent) =>
        <BestEventsItem
          key={item.id}
          event={item}
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

