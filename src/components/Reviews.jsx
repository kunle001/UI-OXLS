import React from 'react'
import styled from 'styled-components';

const Container= styled.div`
    height:100%;
    border-radius:10px;
    background-color:#eee;
`;

const Wrapper= styled.div`
    display:flex;
    width:100%
    padding:20px 5px 10px 15px;
`;

const Image= styled.img`
height:50px;
width:50px;
border-radius:50%;
`;
const ReviewDetails= styled.div`
height:50px;
padding-left:12px;
`;

const Name= styled.h2`
    font-size:20px;
    font-weight:900px;
`;

const Comment= styled.div`
    padding:15px 12px 0px 25px;
    font-weight:bold;
    color:brown;

`

const NumberClasses= styled.p`
    color:gray;
    font-weight:900;
    font-size:13px
`;

const DateWrapper= styled.p`
    font-style:italic;
    font-weight:bold;
    font-size:10px;
    color: gray;
    padding:10px 10px 0px 10px
`

const Reviews = () => {
    const currentDate = new Date();
    return (
      <Container>
          <Wrapper>
          <Image src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA10tiux.img?w=800&h=415&q=60&m=2&f=jpg"/>
          <ReviewDetails>
              <Name>Simi</Name>
              <NumberClasses>15 Japanese Classes</NumberClasses>
          </ReviewDetails>
          </Wrapper>
          <Comment>
              i enjoyed annalease class a lot, it was fun!
          </Comment>
          <DateWrapper>
              {currentDate.toDateString()}
          </DateWrapper>
      </Container>
    )
  }
  

export default Reviews
