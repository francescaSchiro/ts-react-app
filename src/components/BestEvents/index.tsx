import * as React from 'react';
import styled from 'src/theme/default/index';

import BestEventsItem from 'src/components/BestEventsItem';

// TODO map from events the BestEventsItem
const BestEvents = () => (
  <>
    <Title>Incontri principali</Title>
    <BestEventsSlider>
      <BestEventsItem />
      <BestEventsItem />
    </BestEventsSlider>
  </>
);

export default BestEvents;


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



