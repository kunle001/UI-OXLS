import React, {useState} from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import moment from 'moment'


const Container = styled.div`
  border-radius: 5px;
  height: 100%;
  width: 100%;
  padding: 12px 0px 12px 0px;

  .react-calendar__tile--active {
    background-color: brown;
  }
`;

const Calender = () => {
  
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      console.log(setDateState)
      setDateState(e)
    };
    const [markedDates, setMarkedDates] = useState({
      [moment(new Date()).format('YYYY-MM-DD')]: { selected: true },
      '2023-02-10': { selected: true },
      '2023-02-11': { selected: true },
      '2023-02-12': { selected: true },
    });
    console.log(markedDates)
    return (
      
        <Container>
          <Calendar 
            value={dateState}
            onChange={changeDate}
            markedDates={markedDates}
          />
        </Container>
        )
}

export default Calender
