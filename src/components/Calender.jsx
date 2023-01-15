import React, {useState} from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import moment from 'moment'


const Container= styled.div`
    border-radius:5px;
    height:100%;
    width:100%;
    padding:12px 0px 12px 0px;
`;


const Calender = () => {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      setDateState(e)
    };
    return (
        <Container>
          <Calendar 
          value={dateState}
          onChange={changeDate}
          />
        {/* <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p> */}
        </Container>
        )
}

export default Calender
