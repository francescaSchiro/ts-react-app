import * as React from 'react';
import styled from 'src/theme/default/index';

import BestEventsItem from 'src/components/BestEventsItem';

const BestEvents = () => (
    <>
        <TitleWrapper>
            <Title>Incontri principali</Title>
        </TitleWrapper>
        <BestEventsSlider>
            <BestEventsItem />
            <BestEventsItem />
            <BestEventsItem />
        </BestEventsSlider>
    </>
);

export default BestEvents;

const TitleWrapper = styled.div`
  width: auto;
  min-height: 20px; 
  padding: 15px 0 10px 0;
  text-align: center;
`;

const Title = styled.p`
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



